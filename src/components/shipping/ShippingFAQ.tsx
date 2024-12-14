import React from 'react';
import { HelpCircle } from 'lucide-react';

export const ShippingFAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How long will my delivery take?',
      answer: 'Delivery times vary based on your location and chosen shipping method. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we offer international shipping to most countries. International delivery times typically range from 7-14 business days.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package through our tracking system.'
    },
    {
      question: 'What if my package is lost or damaged?',
      answer: 'All shipments are insured. If your package is lost or damaged, please contact our support team, and we\'ll help resolve the issue.'
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