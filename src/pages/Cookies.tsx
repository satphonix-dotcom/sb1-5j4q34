import React from 'react';
import { Cookie, Shield, Settings, BarChart } from 'lucide-react';

export const Cookies: React.FC = () => {
  const [preferences, setPreferences] = React.useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false
  });

  const handleSavePreferences = () => {
    // Save cookie preferences
    console.log('Saving preferences:', preferences);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Cookie className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">About Cookies</h2>
          </div>
          <p className="text-gray-600">
            We use cookies to enhance your experience on our platform. Cookies are small text
            files that are stored on your device when you visit our website.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Cookie Preferences</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Necessary Cookies</h3>
                <p className="text-sm text-gray-500">
                  Required for the website to function properly
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                <p className="text-sm text-gray-500">
                  Enable advanced features and personalization
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                <p className="text-sm text-gray-500">
                  Help us understand how visitors use our website
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                <p className="text-sm text-gray-500">
                  Used to deliver personalized advertisements
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            onClick={handleSavePreferences}
            className="mt-6 w-full btn"
          >
            Save Preferences
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Shield className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="font-medium text-gray-900 mb-2">Privacy Protection</h3>
            <p className="text-sm text-gray-600">
              We respect your privacy and protect your personal information
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Settings className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="font-medium text-gray-900 mb-2">Cookie Control</h3>
            <p className="text-sm text-gray-600">
              Manage your cookie preferences at any time
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <BarChart className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="font-medium text-gray-900 mb-2">Performance Optimization</h3>
            <p className="text-sm text-gray-600">
              Cookies help us improve website performance
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              You can also manage cookies through your browser settings. Please note that
              disabling certain cookies may affect the functionality of our website.
            </p>
            <p>
              For more information about how we protect your privacy, please read our
              <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500 ml-1">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};