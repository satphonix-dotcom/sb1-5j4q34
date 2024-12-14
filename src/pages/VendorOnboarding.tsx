import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Upload, AlertCircle } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const VendorOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [step, setStep] = React.useState<'details' | 'verification' | 'complete'>('details');
  const [error, setError] = React.useState('');
  const [storeDetails, setStoreDetails] = React.useState({
    storeName: '',
    description: '',
    logo: '',
    address: '',
    phone: '',
    website: '',
    categories: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('verification');
    } catch (err) {
      setError('Failed to submit store details. Please try again.');
    }
  };

  const handleVerification = async () => {
    try {
      // Mock verification process - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('complete');
    } catch (err) {
      setError('Verification failed. Please try again.');
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-center space-x-4">
        <div className={`flex items-center ${step === 'details' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full">1</div>
          <span className="ml-2">Store Details</span>
        </div>
        <div className="w-16 h-0.5 bg-gray-200" />
        <div className={`flex items-center ${step === 'verification' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full">2</div>
          <span className="ml-2">Verification</span>
        </div>
        <div className="w-16 h-0.5 bg-gray-200" />
        <div className={`flex items-center ${step === 'complete' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full">3</div>
          <span className="ml-2">Complete</span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {step === 'details' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Store className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Create Your Store</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Store Name</label>
              <input
                type="text"
                required
                value={storeDetails.storeName}
                onChange={(e) => setStoreDetails(prev => ({ ...prev, storeName: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                required
                rows={4}
                value={storeDetails.description}
                onChange={(e) => setStoreDetails(prev => ({ ...prev, description: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Store Logo</label>
              <div className="mt-1 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {storeDetails.logo ? (
                    <img
                      src={storeDetails.logo}
                      alt="Store logo"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    // Mock file upload - replace with actual implementation
                    setStoreDetails(prev => ({
                      ...prev,
                      logo: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200'
                    }));
                  }}
                >
                  Upload Logo
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Business Address</label>
              <input
                type="text"
                required
                value={storeDetails.address}
                onChange={(e) => setStoreDetails(prev => ({ ...prev, address: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={storeDetails.phone}
                  onChange={(e) => setStoreDetails(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Website (Optional)</label>
                <input
                  type="url"
                  value={storeDetails.website}
                  onChange={(e) => setStoreDetails(prev => ({ ...prev, website: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Categories</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Art', 'Food'].map((category) => (
                  <label key={category} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={storeDetails.categories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setStoreDetails(prev => ({
                            ...prev,
                            categories: [...prev.categories, category]
                          }));
                        } else {
                          setStoreDetails(prev => ({
                            ...prev,
                            categories: prev.categories.filter(c => c !== category)
                          }));
                        }
                      }}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full btn">
              Continue to Verification
            </button>
          </form>
        </div>
      )}

      {step === 'verification' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Store className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Verify Your Store</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-900">Required Documents</h3>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li>Business Registration Certificate</li>
                <li>Tax ID or VAT Number</li>
                <li>Government-issued ID</li>
                <li>Proof of Address</li>
              </ul>
            </div>

            <div className="space-y-4">
              {['Business Registration', 'Tax ID', 'ID Document', 'Address Proof'].map((doc) => (
                <div key={doc} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{doc}</span>
                  <button className="btn-secondary">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleVerification}
              className="w-full btn"
            >
              Submit for Verification
            </button>
          </div>
        </div>
      )}

      {step === 'complete' && (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Store className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Store Created Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your store is now under review. We'll notify you once it's approved.
            This usually takes 1-2 business days.
          </p>
          <button
            onClick={() => navigate('/profile')}
            className="btn"
          >
            Go to Profile
          </button>
        </div>
      )}
    </div>
  );
};