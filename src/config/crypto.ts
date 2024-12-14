export const SUPPORTED_CRYPTOCURRENCIES = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    networks: ['Bitcoin'],
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    decimals: 8,
    minAmount: 0.001,
    isNative: true
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    networks: ['Ethereum', 'Polygon'],
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    decimals: 18,
    minAmount: 0.01,
    isNative: true
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    networks: ['Ethereum', 'BSC', 'Polygon'],
    icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    decimals: 6,
    minAmount: 10
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    networks: ['Ethereum', 'Polygon'],
    icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    decimals: 6,
    minAmount: 10
  },
  {
    symbol: 'DAI',
    name: 'Dai',
    networks: ['Ethereum', 'Polygon'],
    icon: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png',
    decimals: 18,
    minAmount: 10
  }
] as const;