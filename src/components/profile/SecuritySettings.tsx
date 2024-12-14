import React from 'react';
import { Shield, Key, Smartphone, History, AlertCircle } from 'lucide-react';

export const SecuritySettings: React.FC = () => {
  const [showTwoFactorModal, setShowTwoFactorModal] = React.useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = React.useState(false);
  const [qrCode, setQrCode] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [error, setError] = React.useState('');

  const recentActivity = [
    {
      id: '1',
      device: 'Chrome on Windows',
      location: 'New York, USA',
      ip: '192.168.1.1',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: '2',
      device: 'Safari on iPhone',
      location: 'New York, USA',
      ip: '192.168.1.2',
      timestamp: new Date(Date.now() - 86400000).toISOString()
    }
  ];

  const handleEnable2FA = async () => {
    try {
      // In a real app, make API call to enable 2FA
      setQrCode('mock-qr-code');
      setShowTwoFactorModal(true);
    } catch (error) {
      setError('Failed to enable 2FA. Please try again.');
    }
  };

  const handleVerify2FA = async () => {
    try {
      // In a real app, verify the code with the API
      if (verificationCode === '123456') {
        setIs2FAEnabled(true);
        setShowTwoFactorModal(false);
      } else {
        setError('Invalid verification code');
      }
    } catch (error) {
      setError('Failed to verify code. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Shield className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Two-Factor Authentication
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </div>
              <button
                onClick={handleEnable2FA}
                className={`btn ${is2FAEnabled ? 'btn-secondary' : ''}`}
              >
                {is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Key className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Password
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Last changed 3 months ago
                </p>
              </div>
              <button className="btn-secondary">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Devices */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Smartphone className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-medium text-gray-900">
              Trusted Devices
            </h3>
            <div className="mt-4 space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.device}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.location} • {activity.ip}
                    </p>
                  </div>
                  <button className="text-sm text-red-600 hover:text-red-700">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <History className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activity
            </h3>
            <div className="mt-4 space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.device}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.location} • {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {activity.ip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2FA Modal */}
      {showTwoFactorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Enable Two-Factor Authentication
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  Scan this QR code with your authenticator app (e.g., Google Authenticator)
                </p>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  {/* In a real app, display actual QR code */}
                  <div className="w-48 h-48 bg-gray-300 rounded" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter 6-digit code"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowTwoFactorModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerify2FA}
                  className="btn"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};