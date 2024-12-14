import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-indigo max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Data Protection</h2>
          </div>
          <p className="text-gray-600 mb-4">
            At VelvetCoin, we take your privacy seriously. This policy outlines how we collect,
            use, and protect your personal information when you use our platform.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Information We Collect</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Account information (name, email, wallet addresses)</li>
              <li>Transaction history and payment details</li>
              <li>Shopping preferences and behavior</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process your orders and payments</li>
              <li>Provide customer support</li>
              <li>Improve our services and user experience</li>
              <li>Send relevant marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Security</h3>
            <p className="text-gray-600 mb-4">
              We implement robust security measures to protect your information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Lock className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-2">Encryption</h4>
                <p className="text-sm text-gray-600">
                  All sensitive data is encrypted using industry-standard protocols
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Eye className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-2">Access Control</h4>
                <p className="text-sm text-gray-600">
                  Strict access controls and authentication measures
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <FileText className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-2">Regular Audits</h4>
                <p className="text-sm text-gray-600">
                  Regular security audits and compliance checks
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Rights</h3>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600">
              If you have any questions about our privacy policy or how we handle your data,
              please contact our Data Protection Officer at privacy@velvetcoin.com
            </p>
          </section>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">
            Last updated: March 2024
          </p>
        </div>
      </div>
    </div>
  );
};