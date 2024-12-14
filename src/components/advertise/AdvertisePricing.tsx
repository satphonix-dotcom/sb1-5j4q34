import React from 'react';
import { Check } from 'lucide-react';

export const AdvertisePricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '500',
      currency: 'USDT',
      period: '/month',
      description: 'Perfect for small businesses starting to advertise',
      features: [
        'Basic display ads',
        '50,000 impressions',
        'Basic targeting options',
        'Standard analytics',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      price: '2,000',
      currency: 'USDT',
      period: '/month',
      description: 'For growing businesses with advanced needs',
      features: [
        'Premium ad placements',
        '250,000 impressions',
        'Advanced targeting',
        'Detailed analytics',
        'Priority support',
        'A/B testing',
        'Custom reporting'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large businesses',
      features: [
        'Custom ad solutions',
        'Unlimited impressions',
        'Advanced targeting',
        'Real-time analytics',
        'Dedicated account manager',
        'API access',
        'Custom integration',
        'SLA support'
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Advertising Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {plan.price}
              {plan.currency && <span className="text-lg ml-1">{plan.currency}</span>}
              {plan.period && (
                <span className="text-base font-normal text-gray-500">{plan.period}</span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};