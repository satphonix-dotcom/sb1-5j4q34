import React from 'react';
import { Check } from 'lucide-react';

export const AffiliateCommissions: React.FC = () => {
  const tiers = [
    {
      name: 'Standard',
      commission: '15%',
      requirements: 'No minimum sales',
      features: [
        'Basic reporting dashboard',
        'Standard support',
        'Monthly payments',
        'Basic marketing materials'
      ]
    },
    {
      name: 'Premium',
      commission: '20%',
      requirements: '$5,000 monthly sales',
      features: [
        'Advanced analytics',
        'Priority support',
        'Bi-weekly payments',
        'Custom marketing materials',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Elite',
      commission: '25%',
      requirements: '$20,000 monthly sales',
      features: [
        'Real-time analytics',
        'VIP support',
        'Weekly payments',
        'Custom marketing materials',
        'Dedicated account manager',
        'Early access to features'
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Commission Tiers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map(({ name, commission, requirements, features }) => (
          <div key={name} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {commission}
            </div>
            <p className="text-sm text-gray-600 mb-6">{requirements}</p>
            <ul className="space-y-3">
              {features.map((feature) => (
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