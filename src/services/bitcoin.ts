import axios from 'axios';
import { Transaction } from '../types';

interface BTCTransaction {
  txid: string;
  confirmations: number;
  amount: number;
  time: number;
  address: string;
}

class BitcoinService {
  private static instance: BitcoinService;
  private apiKey = process.env.BLOCKSTREAM_API_KEY;
  private apiUrl = 'https://blockstream.info/api';
  
  private constructor() {}

  static getInstance(): BitcoinService {
    if (!BitcoinService.instance) {
      BitcoinService.instance = new BitcoinService();
    }
    return BitcoinService.instance;
  }

  async getAddressTransactions(address: string): Promise<BTCTransaction[]> {
    try {
      const response = await axios.get(`${this.apiUrl}/address/${address}/txs`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch BTC transactions:', error);
      return [];
    }
  }

  async verifyPayment(
    address: string,
    expectedAmount: number,
    requiredConfirmations = 3
  ): Promise<Transaction | null> {
    try {
      const transactions = await this.getAddressTransactions(address);
      
      const matchingTx = transactions.find(tx => 
        tx.amount === expectedAmount && 
        tx.confirmations >= requiredConfirmations
      );

      if (!matchingTx) return null;

      return {
        id: matchingTx.txid,
        type: 'payment',
        status: 'completed',
        amount: matchingTx.amount,
        currency: 'BTC',
        network: 'Bitcoin',
        fromAddress: matchingTx.address,
        toAddress: address,
        timestamp: matchingTx.time * 1000,
        hash: matchingTx.txid
      };
    } catch (error) {
      console.error('Failed to verify BTC payment:', error);
      return null;
    }
  }

  async getTransactionDetails(txid: string): Promise<BTCTransaction | null> {
    try {
      const response = await axios.get(`${this.apiUrl}/tx/${txid}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch BTC transaction details:', error);
      return null;
    }
  }

  async getAddressBalance(address: string): Promise<number> {
    try {
      const response = await axios.get(`${this.apiUrl}/address/${address}`);
      return response.data.chain_stats.funded_txo_sum / 100000000; // Convert satoshis to BTC
    } catch (error) {
      console.error('Failed to fetch BTC address balance:', error);
      return 0;
    }
  }

  generatePaymentAddress(): string {
    // In a real implementation, you would generate a unique BTC address
    // For demo purposes, we return a static address
    return process.env.PLATFORM_BTC_ADDRESS || '';
  }
}

export const bitcoinService = BitcoinService.getInstance();