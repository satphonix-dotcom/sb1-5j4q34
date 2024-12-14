import { SupportedCrypto } from '../types';

interface PriceData {
  [key: string]: {
    USD: number;
    EUR: number;
    GBP: number;
  };
}

class PriceFeedService {
  private static instance: PriceFeedService;
  private prices: PriceData = {};
  private lastUpdate: number = 0;
  private updateInterval: number = 30000; // 30 seconds
  private apiKey = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY;

  private constructor() {
    this.startPriceUpdates();
  }

  static getInstance(): PriceFeedService {
    if (!PriceFeedService.instance) {
      PriceFeedService.instance = new PriceFeedService();
    }
    return PriceFeedService.instance;
  }

  private async startPriceUpdates() {
    await this.updatePrices();
    setInterval(() => this.updatePrices(), this.updateInterval);
  }

  private async updatePrices() {
    try {
      const symbols = ['BTC', 'ETH', 'USDT', 'USDC', 'DAI'].join(',');
      const currencies = ['USD', 'EUR', 'GBP'].join(',');
      
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols}&tsyms=${currencies}${
          this.apiKey ? `&api_key=${this.apiKey}` : ''
        }`
      );
      
      if (!response.ok) throw new Error('Failed to fetch prices');
      
      this.prices = await response.json();
      this.lastUpdate = Date.now();
      
      // Dispatch price update event
      window.dispatchEvent(new CustomEvent('crypto-price-update', { 
        detail: this.prices 
      }));
    } catch (error) {
      console.error('Failed to update prices:', error);
    }
  }

  async getPrice(crypto: SupportedCrypto, currency: keyof PriceData['BTC'] = 'USD'): Promise<number> {
    if (Date.now() - this.lastUpdate > this.updateInterval) {
      await this.updatePrices();
    }
    return this.prices[crypto.symbol]?.[currency] || 0;
  }

  async convertAmount(
    amount: number,
    fromCrypto: SupportedCrypto,
    toCrypto: SupportedCrypto
  ): Promise<number> {
    const fromUSD = await this.getPrice(fromCrypto, 'USD');
    const toUSD = await this.getPrice(toCrypto, 'USD');
    
    if (!fromUSD || !toUSD) return 0;
    return (amount * fromUSD) / toUSD;
  }

  subscribeToUpdates(callback: (prices: PriceData) => void): () => void {
    const handler = ((event: CustomEvent<PriceData>) => {
      callback(event.detail);
    }) as EventListener;

    window.addEventListener('crypto-price-update', handler);
    return () => window.removeEventListener('crypto-price-update', handler);
  }
}

export const priceFeedService = PriceFeedService.getInstance();