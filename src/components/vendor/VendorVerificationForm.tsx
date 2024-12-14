import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { vendorService } from '../../services/vendorService';
import { VerificationStatus } from '../../types/vendor';

interface VendorVerificationFormProps {
  vendorId: string;
  onVerificationSubmitted: (status: VerificationStatus) => void;
}

export const VendorVerificationForm: React.FC<VendorVerificationFormProps> = ({
  vendorId,
  onVerificationSubmitted
}) => {
  const [documents, setDocuments] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string>('');

  const requiredDocuments = [
    {
      key: 'businessRegistration',
      label: 'Business Registration',
      description: 'Official business registration or incorporation document'
    },
    {
      key: 'taxId',
      label: 'Tax ID',
      description: 'Tax identification document or VAT registration'
    },
    {
      key: 'governmentId',
      label: 'Government ID',
      description: 'Valid government-issued photo ID'
    },
    {
      key: 'addressProof',
      label: 'Address Proof',
      description: 'Recent utility bill or bank statement (less than 3 months old)'
    }
  ];

  const handleFileUpload = async (key: string, file: File) => {
    try {
      // In a real app, upload file to storage and get URL
      const mockUrl = URL.createObjectURL(file);
      setDocuments(prev => ({ ...prev, [key]: mockUrl }));
    } catch (error) {
      console.error('File upload failed:', error);
      setError('Failed to upload file. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const status = await vendorService.submitVerification(vendorId, documents);
      onVerificationSubmitted(status);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Verification submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Document Verification
        </h2>

        <div className="space-y-6">
          {requiredDocuments.map(({ key, label, description }) => (
            <div key={key}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                {documents[key] && (
                  <span className="text-sm text-green-600">Uploaded</span>
                )}
              </div>

              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor={`file-${key}`}
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id={`file-${key}`}
                        name={key}
                        type="file"
                        className="sr-only"
                        accept="image/*,.pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(key, file);
                        }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn"
          disabled={
            isSubmitting ||
            !requiredDocuments.every(({ key }) => documents[key])
          }
        >
          {isSubmitting ? 'Submitting...' : 'Submit for Verification'}
        </button>
      </div>
    </form>
  );
};