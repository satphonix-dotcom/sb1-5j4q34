import React from 'react';
import { Save, Upload } from 'lucide-react';
import { VendorProfile } from '../../types/vendor';
import { vendorService } from '../../services/vendorService';

interface VendorProfileFormProps {
  vendorId: string;
  initialData?: Partial<VendorProfile>;
  onSave: (profile: VendorProfile) => void;
}

export const VendorProfileForm: React.FC<VendorProfileFormProps> = ({
  vendorId,
  initialData,
  onSave
}) => {
  const [profile, setProfile] = React.useState<Partial<VendorProfile>>(initialData || {});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const updatedProfile = await vendorService.updateVendorProfile(vendorId, profile);
      onSave(updatedProfile);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (type: 'logo' | 'coverImage', file: File) => {
    try {
      // In a real app, upload to storage and get URL
      const imageUrl = URL.createObjectURL(file);
      setProfile(prev => ({ ...prev, [type]: imageUrl }));
    } catch (error) {
      console.error('Image upload failed:', error);
      setError('Failed to upload image');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Store Profile</h2>

        <div className="space-y-6">
          {/* Store Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Logo
              </label>
              <div className="flex items-center space-x-4">
                <div className="h-24 w-24 rounded-lg bg-gray-100 flex items-center justify-center">
                  {profile.logo ? (
                    <img
                      src={profile.logo}
                      alt="Store logo"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <Upload className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload('logo', file);
                  }}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="btn-secondary cursor-pointer"
                >
                  Upload Logo
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="flex items-center space-x-4">
                <div className="h-24 w-40 rounded-lg bg-gray-100 flex items-center justify-center">
                  {profile.coverImage ? (
                    <img
                      src={profile.coverImage}
                      alt="Store cover"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <Upload className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload('coverImage', file);
                  }}
                  className="hidden"
                  id="cover-upload"
                />
                <label
                  htmlFor="cover-upload"
                  className="btn-secondary cursor-pointer"
                >
                  Upload Cover
                </label>
              </div>
            </div>
          </div>

          {/* Store Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Store Name
              </label>
              <input
                type="text"
                value={profile.storeName || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, storeName: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={profile.email || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={profile.description || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                value={profile.phone || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                value={profile.website || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, website: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                value={profile.address || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                value={profile.city || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, city: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                value={profile.postalCode || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, postalCode: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                value={profile.country || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, country: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                {/* Add more countries */}
              </select>
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Store Categories
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Electronics',
                'Fashion',
                'Home & Garden',
                'Books',
                'Sports',
                'Art',
                'Food',
                'Health',
                'Beauty'
              ].map((category) => (
                <label key={category} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.categories?.includes(category) || false}
                    onChange={(e) => {
                      const categories = profile.categories || [];
                      setProfile(prev => ({
                        ...prev,
                        categories: e.target.checked
                          ? [...categories, category]
                          : categories.filter(c => c !== category)
                      }));
                    }}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Wallet Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bitcoin Address
              </label>
              <input
                type="text"
                value={profile.walletAddresses?.btc || ''}
                onChange={(e) => setProfile(prev => ({
                  ...prev,
                  walletAddresses: {
                    ...prev.walletAddresses,
                    btc: e.target.value
                  }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your BTC wallet address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ethereum Address
              </label>
              <input
                type="text"
                value={profile.walletAddresses?.eth || ''}
                onChange={(e) => setProfile(prev => ({
                  ...prev,
                  walletAddresses: {
                    ...prev.walletAddresses,
                    eth: e.target.value
                  }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your ETH wallet address"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn flex items-center"
          disabled={isSubmitting}
        >
          <Save className="h-5 w-5 mr-2" />
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};