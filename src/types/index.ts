export interface Transaction {
  id: string;
  type: 'payment' | 'withdrawal' | 'refund';
  status: 'pending' | 'completed' | 'failed';
  amount: number;
  currency: 'BTC' | 'ETH' | 'USDT' | 'USDC' | 'DAI';
  network: 'Bitcoin' | 'Ethereum' | 'Polygon' | 'BSC';
  fromAddress: string;
  toAddress: string;
  timestamp: number;
  hash?: string;
  metadata?: {
    orderId?: string;
    productId?: string;
    vendorId?: string;
  };
}

export interface TransactionFilters {
  type?: Transaction['type'];
  status?: Transaction['status'];
  currency?: Transaction['currency'];
  startDate?: Date;
  endDate?: Date;
}

// Previous types remain unchanged...