import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, ExternalLink } from 'lucide-react';
import { useBitcoinPayment } from '../hooks/useBitcoinPayment';
import { Transaction } from '../types';

interface BitcoinPaymentProps {
  amount: number;
  onPaymentComplete: (payment: Transaction) => void;
  onPaymentFailed: (error: string) => void;
}

export const BitcoinPayment: React.FC<BitcoinPaymentProps> = ({
  amount,
  onPaymentComplete,
  onPaymentFailed
}) => {
  const {
    paymentAddress,
    isVerifying,
    verificationAttempts,
    verifyPayment
  } = useBitcoinPayment({
    amount,
    onPaymentComplete,
    onPaymentFailed
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(paymentAddress);
      alert('Address copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy address:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Send exactly {amount} BTC
          </h3>
          <p className="text-sm text-gray-500">
            The payment will be automatically verified once confirmed
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <QRCodeSVG
            value={`bitcoin:${paymentAddress}?amount=${amount}`}
            size={200}
            level="H"
          />
        </div>

        <div className="space-y-4">
          <div className="bg-white p-3 rounded-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bitcoin Address
            </label>
            <div className="flex items-center">
              <code className="flex-1 font-mono text-sm">{paymentAddress}</code>
              <button
                onClick={copyToClipboard}
                className="ml-2 p-1 text-gray-400 hover:text-gray-600"
              >
                <Copy className="h-5 w-5" />
              </button>
              <a
                href={`https://mempool.space/address/${paymentAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-1 text-gray-400 hover:text-gray-600"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-white p-3 rounded-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="font-mono text-lg">{amount} BTC</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        {isVerifying ? (
          <div className="text-sm text-gray-600">
            Verifying payment... Attempt {verificationAttempts + 1}/20
          </div>
        ) : (
          <button
            onClick={() => verifyPayment()}
            className="btn"
            disabled={isVerifying}
          >
            Check Payment Status
          </button>
        )}
      </div>

      <div className="text-sm text-gray-500">
        <ul className="list-disc list-inside space-y-1">
          <li>Send the exact amount shown above</li>
          <li>Payment requires 3 confirmations</li>
          <li>Verification can take up to 30 minutes</li>
          <li>Do not close this window during verification</li>
        </ul>
      </div>
    </div>
  );
};