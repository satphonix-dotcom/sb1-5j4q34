import React from 'react';
import { CheckCircle, XCircle, Eye } from 'lucide-react';

interface VendorVerification {
  id: string;
  storeName: string;
  vendorName: string;
  submittedDate: string;
  documents: {
    businessRegistration: string;
    taxId: string;
    governmentId: string;
    addressProof: string;
  };
}

const MOCK_VERIFICATIONS: VendorVerification[] = [
  {
    id: '1',
    storeName: 'Tech Gadgets Store',
    vendorName: 'John Doe',
    submittedDate: '2024-03-10',
    documents: {
      businessRegistration: 'url-to-doc',
      taxId: 'url-to-doc',
      governmentId: 'url-to-doc',
      addressProof: 'url-to-doc'
    }
  }
];

export const AdminVerifications: React.FC = () => {
  const [verifications, setVerifications] = React.useState(MOCK_VERIFICATIONS);
  const [selectedVerification, setSelectedVerification] = React.useState<VendorVerification | null>(null);

  const handleApprove = async (id: string) => {
    // Implement approval logic
    setVerifications(verifications.filter(v => v.id !== id));
  };

  const handleReject = async (id: string) => {
    // Implement rejection logic
    setVerifications(verifications.filter(v => v.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Vendor Verifications</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Documents
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {verifications.map((verification) => (
                <tr key={verification.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {verification.storeName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {verification.vendorName}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {verification.submittedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedVerification(verification)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleApprove(verification.id)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleReject(verification.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <XCircle className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Preview Modal */}
      {selectedVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-xl font-bold mb-4">Verification Documents</h2>
            <div className="space-y-4">
              {Object.entries(selectedVerification.documents).map(([key, value]) => (
                <div key={key} className="border rounded p-4">
                  <h3 className="font-medium capitalize mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="bg-gray-100 p-4 rounded">
                    {/* In a real app, render document preview or download link */}
                    Document Preview Placeholder
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedVerification(null)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};