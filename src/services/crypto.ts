import { SupportedCrypto } from '../types';

interface PriceData {
  [key: string]: {
    USD: number;
  };
}

class CryptoService {
  private static instance: CryptoService;
  private prices: PriceData = {};
  private lastUpdate: number = 0;
  private updateInterval: number = 60000; // 1 minute

  private constructor() {}

  static getInstance(): CryptoService {
    if (!CryptoService.instance) {
      CryptoService.instance = new CryptoService();
    }
    return CryptoService.instance;
  }

  async getPrices(symbols: string[]): Promise<PriceData> {
    const now = Date.now();
    if (now - this.lastUpdate > this.updateInterval) {
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols.join(',')}&tsyms=USD`
        );
        this.prices = await response.json();
        this.lastUpdate = now;
      } catch (error) {
        console.error('Failed to fetch crypto prices:', error);
      }
    }
    return this.prices;
  }

  async convertToUSD(amount: number, crypto: SupportedCrypto): Promise<number> {
    const prices = await this.getPrices([crypto.symbol]);
    return amount * (prices[crypto.symbol]?.USD || 0);
  }

  async convertFromUSD(usdAmount: number, crypto: SupportedCrypto): Promise<number> {
    const prices = await this.getPrices([crypto.symbol]);
    const rate = prices[crypto.symbol]?.USD;
    if (!rate) return 0;
    return usdAmount / rate;
  }
}

export const cryptoService = CryptoService.getInstance();