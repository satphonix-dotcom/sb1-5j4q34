import { useState, useEffect } from 'react';
import { bitcoinService } from '../services/bitcoin';
import { Transaction } from '../types';

interface UseBitcoinPaymentProps {
  amount: number;
  onPaymentComplete: (payment: Transaction) => void;
  onPaymentFailed: (error: string) => void;
}

export const useBitcoinPayment = ({
  amount,
  onPaymentComplete,
  onPaymentFailed
}: UseBitcoinPaymentProps) => {
  const [paymentAddress, setPaymentAddress] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const MAX_VERIFICATION_ATTEMPTS = 20;
  const VERIFICATION_INTERVAL = 30000; // 30 seconds

  useEffect(() => {
    const address = bitcoinService.generatePaymentAddress();
    setPaymentAddress(address);
  }, []);

  const verifyPayment = async () => {
    if (!paymentAddress || isVerifying) return;

    setIsVerifying(true);
    try {
      const payment = await bitcoinService.verifyPayment(paymentAddress, amount);
      
      if (payment) {
        onPaymentComplete(payment);
        return true;
      }
      
      if (verificationAttempts >= MAX_VERIFICATION_ATTEMPTS) {
        onPaymentFailed('Payment verification timeout. Please contact support.');
        return false;
      }

      setVerificationAttempts(prev => prev + 1);
      return false;
    } catch (error) {
      onPaymentFailed(error instanceof Error ? error.message : 'Payment verification failed');
      return false;
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (!paymentAddress) return;

    const interval = setInterval(async () => {
      const success = await verifyPayment();
      if (success) {
        clearInterval(interval);
      }
    }, VERIFICATION_INTERVAL);

    return () => clearInterval(interval);
  }, [paymentAddress]);

  return {
    paymentAddress,
    isVerifying,
    verificationAttempts,
    verifyPayment
  };
};