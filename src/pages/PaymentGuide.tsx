import React from 'react';
import { Wallet, Shield, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';
import { SUPPORTED_CRYPTOCURRENCIES } from '../config/crypto';

export const PaymentGuide: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cryptocurrency Payment Guide</h1>

      {/* Supported Cryptocurrencies */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Supported Cryptocurrencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUPPORTED_CRYPTOCURRENCIES.map((crypto) => (
            <div key={crypto.symbol} className="flex items-center p-4 border rounded-lg">
              <img
                src={crypto.icon}
                alt={crypto.name}
                className="w-8 h-8 mr-3"
              />
              <div>
                <h3 className="font-medium text-gray-900">{crypto.name}</h3>
                <p className="text-sm text-gray-500">{crypto.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Steps */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          How to Pay with Cryptocurrency
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
              <span className="w-6 h-6 flex items-center justify-center text-indigo-600 font-bold">
                1
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Choose Your Cryptocurrency
              </h3>
              <p className="mt-1 text-gray-600">
                Select your preferred cryptocurrency from the supported options at checkout.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
              <span className="w-6 h-6 flex items-center justify-center text-indigo-600 font-bold">
                2
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Connect Your Wallet
              </h3>
              <p className="mt-1 text-gray-600">
                Use MetaMask for ETH and ERC-20 tokens, or scan the QR code for Bitcoin payments.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
              <span className="w-6 h-6 flex items-center justify-center text-indigo-600 font-bold">
                3
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Confirm Payment
              </h3>
              <p className="mt-1 text-gray-600">
                Review the transaction details and confirm the payment in your wallet.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
              <span className="w-6 h-6 flex items-center justify-center text-indigo-600 font-bold">
                4
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Wait for Confirmation
              </h3>
              <p className="mt-1 text-gray-600">
                The transaction will be confirmed on the blockchain. This usually takes a few minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Payment Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Secure Transactions</h3>
              <p className="mt-1 text-sm text-gray-600">
                All transactions are secured by blockchain technology and cannot be tampered with.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Verification Required</h3>
              <p className="mt-1 text-sm text-gray-600">
                We wait for multiple block confirmations to ensure payment finality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                What happens if I send the wrong amount?
              </span>
              <HelpCircle className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              If you send less than the required amount, you'll need to complete the payment.
              If you send more, the excess will be refunded to your wallet.
            </p>
          </details>

          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                How long do payments take to process?
              </span>
              <HelpCircle className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              Processing times vary by cryptocurrency. Bitcoin typically takes 30-60 minutes,
              while Ethereum transactions usually complete within 5-10 minutes.
            </p>
          </details>

          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                What if my transaction fails?
              </span>
              <HelpCircle className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              Failed transactions are automatically refunded to your wallet. If you don't
              receive your refund within 24 hours, please contact our support team.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};