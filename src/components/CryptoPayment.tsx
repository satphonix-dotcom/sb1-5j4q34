import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Wallet, Copy, ExternalLink, DollarSign } from 'lucide-react';
import { CryptoPayment, SupportedCrypto } from '../types';
import { SUPPORTED_CRYPTOCURRENCIES } from '../config/crypto';
import { ethers } from 'ethers';
import { PriceConverter } from './PriceConverter';
import { PaymentStatus } from './PaymentStatus';
import { tokenPaymentService } from '../services/tokenPayment';
import { TOKEN_ADDRESSES } from '../contracts/erc20';

interface CryptoPaymentProps {
  amount: number;
  onPaymentComplete: (payment: CryptoPayment) => void;
  onPaymentFailed: (error: string) => void;
}

export const CryptoPaymentComponent: React.FC<CryptoPaymentProps> = ({
  amount,
  onPaymentComplete,
  onPaymentFailed
}) => {
  const [selectedCrypto, setSelectedCrypto] = React.useState<SupportedCrypto>(SUPPORTED_CRYPTOCURRENCIES[0]);
  const [selectedNetwork, setSelectedNetwork] = React.useState<string>(selectedCrypto.networks[0]);
  const [paymentStatus, setPaymentStatus] = React.useState<'pending' | 'processing' | 'completed' | 'failed'>('pending');
  const [error, setError] = React.useState<string>('');
  const [cryptoAmount, setCryptoAmount] = React.useState<number>(amount);
  const [payment, setPayment] = React.useState<CryptoPayment>();

  const handlePayment = async () => {
    try {
      setPaymentStatus('processing');
      setError('');

      if (selectedCrypto.symbol === 'BTC') {
        const payment: CryptoPayment = {
          currency: 'BTC',
          amount: cryptoAmount,
          network: 'Bitcoin',
          address: process.env.PLATFORM_BTC_ADDRESS || ''
        };
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        setPayment(payment);
        setPaymentStatus('completed');
        onPaymentComplete(payment);
      } else if (selectedCrypto.symbol === 'ETH') {
        if (typeof window.ethereum === 'undefined') {
          throw new Error('Please install MetaMask to make ETH payments');
        }

        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        
        const tx = await signer.sendTransaction({
          to: process.env.PLATFORM_ETH_ADDRESS,
          value: ethers.parseEther(cryptoAmount.toString())
        });
        
        await tx.wait();
        
        const payment: CryptoPayment = {
          currency: 'ETH',
          amount: cryptoAmount,
          network: selectedNetwork as 'Ethereum' | 'Polygon' | 'BSC',
          address: await signer.getAddress()
        };
        
        setPayment(payment);
        setPaymentStatus('completed');
        onPaymentComplete(payment);
      } else {
        const payment = await tokenPaymentService.makeTokenPayment(
          cryptoAmount,
          selectedCrypto,
          selectedNetwork as keyof typeof TOKEN_ADDRESSES.USDT
        );
        
        setPayment(payment);
        setPaymentStatus('completed');
        onPaymentComplete(payment);
      }
    } catch (error) {
      console.error('Payment failed:', error);
      setPaymentStatus('failed');
      setError(error instanceof Error ? error.message : 'Payment failed');
      onPaymentFailed(error instanceof Error ? error.message : 'Payment failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Cryptocurrency
            </label>
            <select
              value={selectedCrypto.symbol}
              onChange={(e) => {
                const crypto = SUPPORTED_CRYPTOCURRENCIES.find(c => c.symbol === e.target.value);
                if (crypto) {
                  setSelectedCrypto(crypto);
                  setSelectedNetwork(crypto.networks[0]);
                }
              }}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {SUPPORTED_CRYPTOCURRENCIES.map(crypto => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.name} ({crypto.symbol})
                </option>
              ))}
            </select>
          </div>

          {selectedCrypto.networks.length > 1 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Network
              </label>
              <select
                value={selectedNetwork}
                onChange={(e) => setSelectedNetwork(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {selectedCrypto.networks.map(network => (
                  <option key={network} value={network}>
                    {network}
                  </option>
                ))}
              </select>
            </div>
          )}

          <PriceConverter
            amount={cryptoAmount}
            selectedCrypto={selectedCrypto}
            onAmountChange={setCryptoAmount}
          />
        </div>

        <div className="flex justify-center my-6">
          <QRCodeSVG
            value={selectedCrypto.symbol === 'BTC' 
              ? process.env.PLATFORM_BTC_ADDRESS || ''
              : process.env.PLATFORM_ETH_ADDRESS || ''
            }
            size={200}
            level="H"
          />
        </div>

        <div className="text-center text-sm text-gray-600 mb-4">
          {selectedCrypto.isNative ? (
            selectedCrypto.symbol === 'BTC' ? (
              'Scan QR code with your Bitcoin wallet or copy the address'
            ) : (
              'Scan QR code or click the button below to pay with MetaMask'
            )
          ) : (
            'Connect MetaMask to pay with tokens'
          )}
        </div>
      </div>

      <PaymentStatus
        status={paymentStatus}
        payment={payment}
        error={error}
      />

      {paymentStatus === 'pending' && (
        <button
          onClick={handlePayment}
          className="w-full btn flex items-center justify-center"
        >
          <Wallet className="h-5 w-5 mr-2" />
          {selectedCrypto.symbol === 'BTC' ? 'Verify Payment' : 'Pay with MetaMask'}
        </button>
      )}
    </div>
  );
};