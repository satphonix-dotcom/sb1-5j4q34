import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Order } from '../types/order';
import { Transaction } from '../types';
import { receiptService } from '../services/receiptService';

interface PaymentReceiptProps {
  order: Order;
  transaction: Transaction;
}

export const PaymentReceipt: React.FC<PaymentReceiptProps> = ({
  order,
  transaction
}) => {
  const handleDownload = async () => {
    try {
      await receiptService.downloadReceipt(order, transaction);
    } catch (error) {
      console.error('Failed to download receipt:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Payment Receipt</h2>
        <button
          onClick={handleDownload}
          className="btn-secondary flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </button>
      </div>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Order Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Order ID</p>
              <p className="font-medium">{order.id}</p>
            </div>
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Payment Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Amount</p>
              <p className="font-medium">
                {transaction.amount} {transaction.currency}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Network</p>
              <p className="font-medium">{transaction.network}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-500">Transaction Hash</p>
              <div className="flex items-center">
                <code className="font-mono text-xs truncate">
                  {transaction.hash}
                </code>
                {transaction.hash && (
                  <a
                    href={`https://${
                      transaction.network === 'Bitcoin'
                        ? 'mempool.space/tx'
                        : 'etherscan.io/tx'
                    }/${transaction.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-indigo-600 hover:text-indigo-500"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Items</h3>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.productId} className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">
                  {item.price * item.quantity} {item.currency}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-sm font-medium">
            <p className="text-gray-900">Total</p>
            <p className="text-indigo-600">
              {order.total} {order.currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};