import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { CryptoPayment } from '../types';

interface PaymentStatusProps {
  status: 'pending' | 'processing' | 'completed' | 'failed';
  payment?: CryptoPayment;
  error?: string;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({
  status,
  payment,
  error
}) => {
  return (
    <div className="space-y-4">
      {status === 'pending' && (
        <div className="text-center text-gray-600">
          Waiting for payment...
        </div>
      )}

      {status === 'processing' && (
        <div className="flex items-center justify-center text-indigo-600">
          <Clock className="h-5 w-5 mr-2 animate-spin" />
          Processing Payment...
        </div>
      )}

      {status === 'completed' && payment && (
        <div className="bg-green-50 p-4 rounded-md">
          <div className="flex items-center text-green-600 mb-2">
            <CheckCircle className="h-5 w-5 mr-2" />
            Payment Successful!
          </div>
          <div className="text-sm text-gray-600">
            <p>Amount: {payment.amount} {payment.currency}</p>
            <p>Network: {payment.network}</p>
            <p className="font-mono text-xs mt-1">
              Address: {payment.address}
            </p>
          </div>
        </div>
      )}

      {status === 'failed' && (
        <div className="bg-red-50 p-4 rounded-md">
          <div className="flex items-center text-red-600 mb-2">
            <AlertCircle className="h-5 w-5 mr-2" />
            Payment Failed
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};