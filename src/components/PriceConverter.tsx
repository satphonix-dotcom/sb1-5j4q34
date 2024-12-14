import React from 'react';
import { SupportedCrypto } from '../types';
import { cryptoService } from '../services/crypto';

interface PriceConverterProps {
  amount: number;
  selectedCrypto: SupportedCrypto;
  onAmountChange?: (amount: number) => void;
}

export const PriceConverter: React.FC<PriceConverterProps> = ({
  amount,
  selectedCrypto,
  onAmountChange
}) => {
  const [usdAmount, setUsdAmount] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const updateUsdAmount = async () => {
      setIsLoading(true);
      try {
        const usd = await cryptoService.convertToUSD(amount, selectedCrypto);
        setUsdAmount(usd);
      } catch (error) {
        console.error('Failed to convert price:', error);
      }
      setIsLoading(false);
    };

    updateUsdAmount();
    const interval = setInterval(updateUsdAmount, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [amount, selectedCrypto]);

  const handleUsdChange = async (newUsdAmount: number) => {
    if (!onAmountChange) return;
    
    try {
      const cryptoAmount = await cryptoService.convertFromUSD(newUsdAmount, selectedCrypto);
      onAmountChange(cryptoAmount);
    } catch (error) {
      console.error('Failed to convert USD to crypto:', error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount ({selectedCrypto.symbol})
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange?.(parseFloat(e.target.value) || 0)}
          min={selectedCrypto.minAmount}
          step={1 / Math.pow(10, selectedCrypto.decimals)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount (USD)
        </label>
        <input
          type="number"
          value={isLoading ? '...' : usdAmount.toFixed(2)}
          onChange={(e) => handleUsdChange(parseFloat(e.target.value) || 0)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};