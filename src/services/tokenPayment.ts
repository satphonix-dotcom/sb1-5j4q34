import { ethers } from 'ethers';
import { ERC20_ABI, TOKEN_ADDRESSES } from '../contracts/erc20';
import { CryptoPayment, SupportedCrypto } from '../types';

export class TokenPaymentService {
  private static instance: TokenPaymentService;
  
  private constructor() {}

  static getInstance(): TokenPaymentService {
    if (!TokenPaymentService.instance) {
      TokenPaymentService.instance = new TokenPaymentService();
    }
    return TokenPaymentService.instance;
  }

  async makeTokenPayment(
    amount: number,
    crypto: SupportedCrypto,
    network: keyof typeof TOKEN_ADDRESSES.USDT
  ): Promise<CryptoPayment> {
    if (!window.ethereum) {
      throw new Error('Please install MetaMask to make token payments');
    }

    const tokenAddress = TOKEN_ADDRESSES[crypto.symbol as keyof typeof TOKEN_ADDRESSES]?.[network];
    if (!tokenAddress) {
      throw new Error(`${crypto.symbol} not supported on ${network}`);
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();

    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
    const decimals = await tokenContract.decimals();
    const amountInWei = ethers.parseUnits(amount.toString(), decimals);

    // First approve the platform to spend tokens
    const approveTx = await tokenContract.approve(
      process.env.PLATFORM_WALLET_ADDRESS,
      amountInWei
    );
    await approveTx.wait();

    // Then transfer the tokens
    const transferTx = await tokenContract.transfer(
      process.env.PLATFORM_WALLET_ADDRESS,
      amountInWei
    );
    await transferTx.wait();

    return {
      currency: crypto.symbol as CryptoPayment['currency'],
      amount,
      network,
      address: userAddress
    };
  }

  async getTokenBalance(
    tokenSymbol: string,
    network: keyof typeof TOKEN_ADDRESSES.USDT,
    address: string
  ): Promise<number> {
    if (!window.ethereum) {
      throw new Error('Please install MetaMask to check token balance');
    }

    const tokenAddress = TOKEN_ADDRESSES[tokenSymbol as keyof typeof TOKEN_ADDRESSES]?.[network];
    if (!tokenAddress) {
      throw new Error(`${tokenSymbol} not supported on ${network}`);
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    
    const decimals = await tokenContract.decimals();
    const balance = await tokenContract.balanceOf(address);
    
    return Number(ethers.formatUnits(balance, decimals));
  }
}

export const tokenPaymentService = TokenPaymentService.getInstance();