import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SupportedCrypto } from '../types';
import { priceFeedService } from '../services/priceFeed';
import { PriceDisplay } from './PriceDisplay';

interface CurrencyConverterProps {
  fromCrypto: SupportedCrypto;
  toCrypto: SupportedCrypto;
  amount: number;
  onAmountChange?: (amount: number) => void;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  fromCrypto,
  toCrypto,
  amount,
  onAmountChange
}) => {
  const [convertedAmount, setConvertedAmount] = React.useState<number>(0);
  const [isConverting, setIsConverting] = React.useState(false);

  React.useEffect(() => {
    const convertAmount = async () => {
      setIsConverting(true);
      try {
        const converted = await priceFeedService.convertAmount(
          amount,
          fromCrypto,
          toCrypto
        );
        setConvertedAmount(converted);
      } catch (error) {
        console.error('Conversion failed:', error);
      } finally {
        setIsConverting(false);
      }
    };

    convertAmount();
  }, [amount, fromCrypto.symbol, toCrypto.symbol]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From {fromCrypto.name}
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => onAmountChange?.(parseFloat(e.target.value) || 0)}
              min={0}
              step={Math.pow(10, -fromCrypto.decimals)}
              className="w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">
                {fromCrypto.symbol}
              </span>
            </div>
          </div>
          <div className="mt-1">
            <PriceDisplay crypto={fromCrypto} showChange />
          </div>
        </div>

        <div className="flex items-center">
          <ArrowRight className="h-6 w-6 text-gray-400" />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To {toCrypto.name}
          </label>
          <div className="relative">
            <input
              type="number"
              value={isConverting ? '...' : convertedAmount}
              readOnly
              className="w-full rounded-md border-gray-300 pr-12 bg-gray-50"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">
                {toCrypto.symbol}
              </span>
            </div>
          </div>
          <div className="mt-1">
            <PriceDisplay crypto={toCrypto} showChange />
          </div>
        </div>
      </div>
    </div>
  );
};