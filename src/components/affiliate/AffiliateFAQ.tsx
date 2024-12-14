import React from 'react';
import { HelpCircle } from 'lucide-react';

export const AffiliateFAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How do I become an affiliate?',
      answer: 'Sign up for our affiliate program, complete the verification process, and start sharing your unique referral link.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Payments are processed according to your tier level - monthly for Standard, bi-weekly for Premium, and weekly for Elite affiliates.'
    },
    {
      question: 'What cryptocurrencies can I receive payments in?',
      answer: 'We support payments in BTC, ETH, USDT, and other major cryptocurrencies. You can choose your preferred payment method.'
    },
    {
      question: 'How are commissions calculated?',
      answer: 'Commissions are calculated as a percentage of the transaction value and vary based on your tier level (15-25%).'
    },
    {
      question: 'Is there a minimum payout threshold?',
      answer: 'Yes, the minimum payout threshold is $50 worth of cryptocurrency.'
    },
    {
      question: 'How long is the cookie duration?',
      answer: 'Our cookies last for 30 days, giving you credit for any purchase made within that timeframe.'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map(({ question, answer }) => (
          <div key={question} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <HelpCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {question}
                </h3>
                <p className="text-gray-600">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};