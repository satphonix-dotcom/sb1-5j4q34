import { Transaction, TransactionFilters } from '../types';

class TransactionHistoryService {
  private static instance: TransactionHistoryService;
  
  private constructor() {}

  static getInstance(): TransactionHistoryService {
    if (!TransactionHistoryService.instance) {
      TransactionHistoryService.instance = new TransactionHistoryService();
    }
    return TransactionHistoryService.instance;
  }

  async getTransactions(filters?: TransactionFilters): Promise<Transaction[]> {
    // In a real app, this would be an API call
    const transactions = await this.getMockTransactions();
    return this.filterTransactions(transactions, filters);
  }

  async getTransactionById(id: string): Promise<Transaction | null> {
    const transactions = await this.getMockTransactions();
    return transactions.find(t => t.id === id) || null;
  }

  private filterTransactions(transactions: Transaction[], filters?: TransactionFilters): Transaction[] {
    if (!filters) return transactions;

    return transactions.filter(transaction => {
      if (filters.type && transaction.type !== filters.type) return false;
      if (filters.status && transaction.status !== filters.status) return false;
      if (filters.currency && transaction.currency !== filters.currency) return false;
      if (filters.startDate && transaction.timestamp < filters.startDate.getTime()) return false;
      if (filters.endDate && transaction.timestamp > filters.endDate.getTime()) return false;
      return true;
    });
  }

  private async getMockTransactions(): Promise<Transaction[]> {
    return [
      {
        id: '1',
        type: 'payment',
        status: 'completed',
        amount: 0.5,
        currency: 'ETH',
        network: 'Ethereum',
        fromAddress: '0x1234...5678',
        toAddress: '0x8765...4321',
        timestamp: Date.now() - 3600000,
        hash: '0xabcd...efgh',
        metadata: {
          orderId: 'order_123',
          productId: 'product_456',
          vendorId: 'vendor_789'
        }
      },
      // Add more mock transactions as needed
    ];
  }
}

export const transactionHistoryService = TransactionHistoryService.getInstance();