import React from 'react';
import { FileText, AlertCircle, Shield, Scale } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <div className="prose prose-indigo max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Agreement Overview</h2>
          </div>
          <p className="text-gray-600">
            By accessing and using VelvetCoin, you agree to be bound by these Terms of Service.
            Please read them carefully before using our platform.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Account Terms</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must be at least 18 years old to use this service</li>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Payment Terms</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-600 mb-2" />
              <p className="text-sm text-gray-600">
                All payments are final and processed in cryptocurrency. Please verify all transaction
                details before confirming payments.
              </p>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Prices are displayed in your selected cryptocurrency</li>
              <li>Exchange rates are updated in real-time</li>
              <li>Transaction fees may apply based on the network</li>
              <li>Refunds will be processed in the original payment currency</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">3. User Responsibilities</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Comply with all applicable laws and regulations</li>
              <li>Do not engage in fraudulent activities</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain accurate shipping information</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">4. Vendor Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-2">Verification</h4>
                <p className="text-sm text-gray-600">
                  Vendors must complete identity verification and maintain accurate business information
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Scale className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-2">Fees</h4>
                <p className="text-sm text-gray-600">
                  Platform fees and payment processing fees apply to all sales
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">5. Prohibited Items</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Illegal goods and services</li>
              <li>Counterfeit products</li>
              <li>Dangerous or hazardous materials</li>
              <li>Items that infringe on intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">6. Termination</h3>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend accounts that violate these terms
              or engage in suspicious activity.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">7. Changes to Terms</h3>
            <p className="text-gray-600">
              We may update these terms from time to time. Continued use of the platform after
              changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">
            Last updated: March 2024. If you have any questions about these terms,
            please contact us at legal@velvetcoin.com
          </p>
        </div>
      </div>
    </div>
  );
};