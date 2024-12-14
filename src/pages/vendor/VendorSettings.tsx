import React from 'react';
import { Save, Bell, Shield, DollarSign } from 'lucide-react';
import { VendorProfileForm } from '../../components/vendor/VendorProfileForm';
import { VendorProfile } from '../../types/vendor';
import { useAuthStore } from '../../store/authStore';

export const VendorSettings: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = React.useState<'profile' | 'notifications' | 'security' | 'payouts'>('profile');

  const handleProfileUpdate = (profile: VendorProfile) => {
    // Handle profile update
    console.log('Profile updated:', profile);
  };

  const tabs = [
    { id: 'profile', label: 'Store Profile', icon: Save },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'payouts', label: 'Payout Settings', icon: DollarSign }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`
                group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <Icon className={`
                h-5 w-5 mr-2
                ${activeTab === id ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}
              `} />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'profile' && (
          <VendorProfileForm
            vendorId={user?.id || ''}
            onSave={handleProfileUpdate}
          />
        )}

        {activeTab === 'notifications' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { id: 'orders', label: 'New Orders' },
                { id: 'messages', label: 'Customer Messages' },
                { id: 'reviews', label: 'New Reviews' },
                { id: 'payouts', label: 'Payout Updates' }
              ].map(({ id, label }) => (
                <div key={id} className="flex items-center justify-between">
                  <div>
                    <label htmlFor={id} className="font-medium text-gray-700">
                      {label}
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive notifications for {label.toLowerCase()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-600">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-600">Push</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
            <div className="space-y-6">
              {/* Two-Factor Authentication */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button className="btn-secondary">Enable 2FA</button>
                </div>
              </div>

              {/* API Keys */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">API Keys</h3>
                    <p className="text-sm text-gray-500">Manage API keys for external integrations</p>
                  </div>
                  <button className="btn-secondary">Generate Key</button>
                </div>
              </div>

              {/* Login History */}
              <div className="border-t pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Recent Login Activity</h3>
                <div className="space-y-4">
                  {[
                    { device: 'Chrome on Windows', location: 'New York, US', time: '2 hours ago' },
                    { device: 'Safari on iPhone', location: 'New York, US', time: '1 day ago' }
                  ].map((login, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <div>
                        <p className="font-medium text-gray-900">{login.device}</p>
                        <p className="text-gray-500">{login.location}</p>
                      </div>
                      <p className="text-gray-500">{login.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payouts' && (
          <div className="space-y-6">
            {/* Payout Methods */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Payout Methods</h2>
              <div className="space-y-6">
                {/* Crypto Wallets */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Cryptocurrency Wallets</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Bitcoin Address</label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          className="flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                          placeholder="Enter your BTC wallet address"
                        />
                        <button className="ml-3 btn-secondary">Verify</button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Ethereum Address</label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          className="flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                          placeholder="Enter your ETH wallet address"
                        />
                        <button className="ml-3 btn-secondary">Verify</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payout Schedule */}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Payout Schedule</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Frequency</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Minimum Payout Amount</label>
                      <input
                        type="number"
                        className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Enter minimum amount"
                      />
                    </div>
                  </div>
                </div>

                {/* Currency Preferences */}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Currency Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Preferred Payout Currency</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="USDT">Tether (USDT)</option>
                        <option value="USDC">USD Coin (USDC)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Changes */}
            <div className="flex justify-end">
              <button className="btn">
                <Save className="h-5 w-5 mr-2" />
                Save Payout Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};