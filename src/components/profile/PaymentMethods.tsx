import React from 'react';
import { Wallet, Plus, Trash2, Check, AlertCircle } from 'lucide-react';
import { SUPPORTED_CRYPTOCURRENCIES } from '../../config/crypto';

interface SavedWallet {
  id: string;
  name: string;
  address: string;
  type: string;
  isDefault: boolean;
}

export const PaymentMethods: React.FC = () => {
  const [wallets, setWallets] = React.useState<SavedWallet[]>([
    {
      id: '1',
      name: 'Main ETH Wallet',
      address: '0x1234...5678',
      type: 'ETH',
      isDefault: true
    },
    {
      id: '2',
      name: 'BTC Wallet',
      address: 'bc1abc...xyz',
      type: 'BTC',
      isDefault: false
    }
  ]);

  const [isAddingWallet, setIsAddingWallet] = React.useState(false);
  const [newWallet, setNewWallet] = React.useState({
    name: '',
    address: '',
    type: SUPPORTED_CRYPTOCURRENCIES[0].symbol
  });
  const [error, setError] = React.useState('');

  const handleAddWallet = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!newWallet.name || !newWallet.address) {
      setError('Please fill in all fields');
      return;
    }

    // Add new wallet
    const wallet: SavedWallet = {
      id: Date.now().toString(),
      name: newWallet.name,
      address: newWallet.address,
      type: newWallet.type,
      isDefault: wallets.length === 0
    };

    setWallets(prev => [...prev, wallet]);
    setIsAddingWallet(false);
    setNewWallet({ name: '', address: '', type: SUPPORTED_CRYPTOCURRENCIES[0].symbol });
  };

  const handleRemoveWallet = (id: string) => {
    setWallets(prev => prev.filter(wallet => wallet.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setWallets(prev => prev.map(wallet => ({
      ...wallet,
      isDefault: wallet.id === id
    })));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
        <button
          onClick={() => setIsAddingWallet(true)}
          className="btn"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Wallet
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {/* Wallet List */}
      <div className="space-y-4">
        {wallets.map(wallet => (
          <div
            key={wallet.id}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 rounded-full p-2">
                <Wallet className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {wallet.name}
                  {wallet.isDefault && (
                    <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                      Default
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {wallet.type} • {wallet.address}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {!wallet.isDefault && (
                <button
                  onClick={() => handleSetDefault(wallet.id)}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  <Check className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={() => handleRemoveWallet(wallet.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Wallet Form */}
      {isAddingWallet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Wallet</h3>
            <form onSubmit={handleAddWallet} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Wallet Name
                </label>
                <input
                  type="text"
                  value={newWallet.name}
                  onChange={(e) => setNewWallet(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g., Main ETH Wallet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cryptocurrency
                </label>
                <select
                  value={newWallet.type}
                  onChange={(e) => setNewWallet(prev => ({ ...prev, type: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {SUPPORTED_CRYPTOCURRENCIES.map(crypto => (
                    <option key={crypto.symbol} value={crypto.symbol}>
                      {crypto.name} ({crypto.symbol})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={newWallet.address}
                  onChange={(e) => setNewWallet(prev => ({ ...prev, address: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter wallet address"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddingWallet(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Add Wallet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};