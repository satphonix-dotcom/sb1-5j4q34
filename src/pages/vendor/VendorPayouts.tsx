import React from 'react';
import { Download, ExternalLink, Filter, Search, DollarSign, Wallet, ArrowRight } from 'lucide-react';
import { Transaction } from '../../types';
import { TransactionStatusBadge } from '../../components/TransactionStatusBadge';
import { formatDistanceToNow } from 'date-fns';
import { useTransactionHistory } from '../../hooks/useTransactionHistory';
import { PriceDisplay } from '../../components/PriceDisplay';
import { SUPPORTED_CRYPTOCURRENCIES } from '../../config/crypto';

export const VendorPayouts: React.FC = () => {
  const [selectedPayout, setSelectedPayout] = React.useState<Transaction | null>(null);
  const [withdrawAmount, setWithdrawAmount] = React.useState<number>(0);
  const [selectedCrypto, setSelectedCrypto] = React.useState(SUPPORTED_CRYPTOCURRENCIES[0]);
  const { transactions, isLoading } = useTransactionHistory({
    type: 'withdrawal'
  });

  const handleWithdraw = async () => {
    // Implement withdrawal logic
    console.log('Withdrawing:', withdrawAmount, selectedCrypto.symbol);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payouts</h1>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Available Balance</h3>
            <DollarSign className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-2">
            {SUPPORTED_CRYPTOCURRENCIES.map(crypto => (
              <div key={crypto.symbol} className="flex justify-between items-center">
                <span className="text-gray-600">{crypto.symbol}</span>
                <PriceDisplay crypto={crypto} showChange />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Pending Payouts</h3>
            <Wallet className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Pending</span>
              <span className="text-xl font-bold">0.5 ETH</span>
            </div>
            <div className="text-sm text-gray-500">
              Next payout in {formatDistanceToNow(new Date(Date.now() + 86400000))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Request Withdrawal</h3>
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                  className="flex-1 rounded-l-md border-r-0 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="0.00"
                />
                <select
                  value={selectedCrypto.symbol}
                  onChange={(e) => {
                    const crypto = SUPPORTED_CRYPTOCURRENCIES.find(c => c.symbol === e.target.value);
                    if (crypto) setSelectedCrypto(crypto);
                  }}
                  className="rounded-r-md border-l-0 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {SUPPORTED_CRYPTOCURRENCIES.map(crypto => (
                    <option key={crypto.symbol} value={crypto.symbol}>
                      {crypto.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={handleWithdraw}
              disabled={withdrawAmount <= 0}
              className="w-full btn"
            >
              Request Withdrawal
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="sm:w-48 flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((payout) => (
                <tr
                  key={payout.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedPayout(payout)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDistanceToNow(payout.timestamp, { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {payout.amount} {payout.currency}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <TransactionStatusBadge status={payout.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-mono">
                      {payout.hash ? `${payout.hash.slice(0, 6)}...${payout.hash.slice(-4)}` : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Download className="h-5 w-5" />
                      </button>
                      {payout.hash && (
                        <a
                          href={`https://etherscan.io/tx/${payout.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payout Detail Modal */}
      {selectedPayout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-xl font-bold mb-4">Payout Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Amount</label>
                  <p className="mt-1 text-lg font-medium">
                    {selectedPayout.amount} {selectedPayout.currency}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Status</label>
                  <TransactionStatusBadge status={selectedPayout.status} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Network</label>
                  <p className="mt-1">{selectedPayout.network}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Date</label>
                  <p className="mt-1">
                    {new Date(selectedPayout.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-500">Transaction Hash</label>
                  <div className="mt-1 font-mono text-sm break-all">
                    {selectedPayout.hash || 'N/A'}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedPayout(null)}
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