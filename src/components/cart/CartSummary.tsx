import React from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { PriceDisplay } from '../PriceDisplay';
import { SUPPORTED_CRYPTOCURRENCIES } from '../../config/crypto';

export const CartSummary: React.FC = () => {
  const { items, total } = useCartStore();
  const [selectedCrypto, setSelectedCrypto] = React.useState(SUPPORTED_CRYPTOCURRENCIES[0]);

  const subtotal = total;
  const platformFee = total * 0.025; // 2.5% platform fee
  const finalTotal = subtotal + platformFee;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal ({items.length} items)</span>
          <PriceDisplay crypto={selectedCrypto} amount={subtotal} />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Platform Fee (2.5%)</span>
          <PriceDisplay crypto={selectedCrypto} amount={platformFee} />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium text-gray-900">Total</span>
            <PriceDisplay 
              crypto={selectedCrypto} 
              amount={finalTotal}
              className="text-lg font-bold text-indigo-600"
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pay with
            </label>
            <select
              value={selectedCrypto.symbol}
              onChange={(e) => {
                const crypto = SUPPORTED_CRYPTOCURRENCIES.find(c => c.symbol === e.target.value);
                if (crypto) setSelectedCrypto(crypto);
              }}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {SUPPORTED_CRYPTOCURRENCIES.map(crypto => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.name} ({crypto.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        <Link
          to="/checkout"
          className="w-full btn flex items-center justify-center mt-6"
        >
          <CreditCard className="h-5 w-5 mr-2" />
          Proceed to Checkout
        </Link>

        <Link
          to="/products"
          className="w-full btn-secondary flex items-center justify-center"
        >
          <ArrowRight className="h-5 w-5 mr-2" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};