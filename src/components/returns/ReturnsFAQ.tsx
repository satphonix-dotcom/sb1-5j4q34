import React from 'react';
import { HelpCircle } from 'lucide-react';

export const ReturnsFAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How long do I have to return an item?',
      answer: 'You have 30 days from the delivery date to initiate a return. The item must be unused and in its original packaging.'
    },
    {
      question: 'How long does the refund process take?',
      answer: 'Once we receive your return, we process the refund within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method.'
    },
    {
      question: 'Do I have to pay for return shipping?',
      answer: 'We provide a free return shipping label for all eligible returns within the same country. International returns may require you to pay for return shipping.'
    },
    {
      question: 'What if I received a damaged item?',
      answer: 'If you receive a damaged item, please contact us immediately with photos of the damage. We\'ll send you a replacement or process a refund right away.'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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