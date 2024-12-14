import { useState, useEffect } from 'react';
import { Transaction, TransactionFilters } from '../types';
import { transactionHistoryService } from '../services/transactionHistory';

interface UseTransactionHistoryProps {
  type?: Transaction['type'];
  status?: Transaction['status'];
  currency?: Transaction['currency'];
  startDate?: Date;
  endDate?: Date;
}

export const useTransactionHistory = (filters?: UseTransactionHistoryProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await transactionHistoryService.getTransactions(filters);
        setTransactions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load transactions');
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, [
    filters?.type,
    filters?.status,
    filters?.currency,
    filters?.startDate,
    filters?.endDate
  ]);

  const refreshTransactions = async () => {
    setIsLoading(true);
    try {
      const data = await transactionHistoryService.getTransactions(filters);
      setTransactions(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh transactions');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    transactions,
    isLoading,
    error,
    refreshTransactions
  };
};