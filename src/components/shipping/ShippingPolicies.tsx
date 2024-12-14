import React from 'react';
import { Shield, Package, RefreshCw, Clock } from 'lucide-react';

export const ShippingPolicies: React.FC = () => {
  const policies = [
    {
      icon: Shield,
      title: 'Shipping Protection',
      description: 'All shipments are insured and tracked for your peace of mind'
    },
    {
      icon: Package,
      title: 'Packaging Guidelines',
      description: 'Items are carefully packaged to ensure safe delivery'
    },
    {
      icon: RefreshCw,
      title: 'Returns & Exchanges',
      description: '30-day return policy with free return shipping'
    },
    {
      icon: Clock,
      title: 'Processing Time',
      description: 'Orders are processed within 24-48 hours'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Shipping Policies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {policies.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};