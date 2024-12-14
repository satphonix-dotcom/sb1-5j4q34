import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { SupportedCrypto } from '../types';
import { usePriceFeed } from '../hooks/usePriceFeed';

interface PriceDisplayProps {
  crypto: SupportedCrypto;
  currency?: 'USD' | 'EUR' | 'GBP';
  showChange?: boolean;
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  crypto,
  currency = 'USD',
  showChange = false,
  className = ''
}) => {
  const { price, isLoading, error } = usePriceFeed({ crypto, currency });
  const [priceChange, setPriceChange] = React.useState<number>(0);

  React.useEffect(() => {
    if (!isLoading && price > 0) {
      const previousPrice = localStorage.getItem(`${crypto.symbol}_previous_price`);
      if (previousPrice) {
        const change = ((price - parseFloat(previousPrice)) / parseFloat(previousPrice)) * 100;
        setPriceChange(change);
      }
      localStorage.setItem(`${crypto.symbol}_previous_price`, price.toString());
    }
  }, [price, isLoading, crypto.symbol]);

  if (error) {
    return <span className="text-red-500 text-sm">Error loading price</span>;
  }

  if (isLoading) {
    return <span className="text-gray-400">Loading...</span>;
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(value);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="font-medium">{formatCurrency(price)}</span>
      {showChange && (
        <div className={`flex items-center text-sm ${
          priceChange > 0 ? 'text-green-500' : priceChange < 0 ? 'text-red-500' : 'text-gray-500'
        }`}>
          {priceChange > 0 ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          <span>{Math.abs(priceChange).toFixed(2)}%</span>
        </div>
      )}
    </div>
  );
};