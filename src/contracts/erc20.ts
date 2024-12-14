import { ethers } from 'ethers';

export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function transfer(address to, uint amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint amount)'
];

export const TOKEN_ADDRESSES = {
  USDT: {
    Ethereum: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    Polygon: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    BSC: '0x55d398326f99059fF775485246999027B3197955'
  },
  USDC: {
    Ethereum: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    Polygon: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    BSC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
  },
  DAI: {
    Ethereum: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    Polygon: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    BSC: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3'
  }
} as const;