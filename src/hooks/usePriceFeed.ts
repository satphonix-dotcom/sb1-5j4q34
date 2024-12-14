import { useState, useEffect } from 'react';
import { SupportedCrypto } from '../types';
import { priceFeedService } from '../services/priceFeed';

interface UsePriceFeedProps {
  crypto: SupportedCrypto;
  currency?: 'USD' | 'EUR' | 'GBP';
}

export const usePriceFeed = ({ crypto, currency = 'USD' }: UsePriceFeedProps) => {
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const updatePrice = async () => {
      try {
        const newPrice = await priceFeedService.getPrice(crypto, currency);
        if (isMounted) {
          setPrice(newPrice);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch price');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    updatePrice();
    const unsubscribe = priceFeedService.subscribeToUpdates(() => updatePrice());

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [crypto.symbol, currency]);

  return { price, isLoading, error };
};