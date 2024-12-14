import React from 'react';
import { Calendar, Filter, ExternalLink, ChevronRight } from 'lucide-react';
import { Transaction, TransactionFilters } from '../types';
import { transactionHistoryService } from '../services/transactionHistory';
import { TransactionStatusBadge } from './TransactionStatusBadge';
import { formatDistanceToNow } from 'date-fns';

export const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [filters, setFilters] = React.useState<TransactionFilters>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedTransaction, setSelectedTransaction] = React.useState<Transaction | null>(null);

  React.useEffect(() => {
    loadTransactions();
  }, [filters]);

  const loadTransactions = async () => {
    setIsLoading(true);
    try {
      const data = await transactionHistoryService.getTransactions(filters);
      setTransactions(data);
    } catch (error) {
      console.error('Failed to load transactions:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-wrap gap-4">
          <select
            value={filters.type || ''}
            onChange={(e) => setFilters(f => ({ ...f, type: e.target.value as Transaction['type'] || undefined }))}
            className="rounded-md border-gray-300"
          >
            <option value="">All Types</option>
            <option value="payment">Payment</option>
            <option value="withdrawal">Withdrawal</option>
            <option value="refund">Refund</option>
          </select>

          <select
            value={filters.status || ''}
            onChange={(e) => setFilters(f => ({ ...f, status: e.target.value as Transaction['status'] || undefined }))}
            className="rounded-md border-gray-300"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>

          <select
            value={filters.currency || ''}
            onChange={(e) => setFilters(f => ({ ...f, currency: e.target.value as Transaction['currency'] || undefined }))}
            className="rounded-md border-gray-300"
          >
            <option value="">All Currencies</option>
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="DAI">DAI</option>
          </select>

          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <input
              type="date"
              onChange={(e) => setFilters(f => ({ ...f, startDate: e.target.value ? new Date(e.target.value) : undefined }))}
              className="rounded-md border-gray-300"
            />
            <span>to</span>
            <input
              type="date"
              onChange={(e) => setFilters(f => ({ ...f, endDate: e.target.value ? new Date(e.target.value) : undefined }))}
              className="rounded-md border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Loading transactions...</div>
        ) : transactions.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No transactions found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedTransaction(transaction)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.hash ? `${transaction.hash.slice(0, 6)}...${transaction.hash.slice(-4)}` : 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.amount} {transaction.currency}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.network}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <TransactionStatusBadge status={transaction.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDistanceToNow(transaction.timestamp, { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        {transaction.hash && (
                          <a
                            href={`https://etherscan.io/tx/${transaction.hash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Type</label>
                  <p className="mt-1">{selectedTransaction.type}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Status</label>
                  <TransactionStatusBadge status={selectedTransaction.status} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Amount</label>
                  <p className="mt-1">{selectedTransaction.amount} {selectedTransaction.currency}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Network</label>
                  <p className="mt-1">{selectedTransaction.network}</p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-500">Transaction Hash</label>
                  <p className="mt-1 font-mono text-sm">{selectedTransaction.hash || 'N/A'}</p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-500">From</label>
                  <p className="mt-1 font-mono text-sm">{selectedTransaction.fromAddress}</p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-500">To</label>
                  <p className="mt-1 font-mono text-sm">{selectedTransaction.toAddress}</p>
                </div>
              </div>

              {selectedTransaction.metadata && (
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-lg font-medium mb-2">Additional Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedTransaction.metadata.orderId && (
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Order ID</label>
                        <p className="mt-1">{selectedTransaction.metadata.orderId}</p>
                      </div>
                    )}
                    {selectedTransaction.metadata.productId && (
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Product ID</label>
                        <p className="mt-1">{selectedTransaction.metadata.productId}</p>
                      </div>
                    )}
                    {selectedTransaction.metadata.vendorId && (
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Vendor ID</label>
                        <p className="mt-1">{selectedTransaction.metadata.vendorId}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedTransaction(null)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};