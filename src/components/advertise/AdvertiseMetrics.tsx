import React from 'react';
import { Users, Eye, ShoppingCart, TrendingUp } from 'lucide-react';

export const AdvertiseMetrics: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      value: '1M+',
      label: 'Monthly Active Users',
      color: 'text-blue-500'
    },
    {
      icon: Eye,
      value: '10M+',
      label: 'Monthly Page Views',
      color: 'text-green-500'
    },
    {
      icon: ShoppingCart,
      value: '500K+',
      label: 'Monthly Transactions',
      color: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      value: '25%',
      label: 'Avg. Conversion Rate',
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
      {metrics.map(({ icon: Icon, value, label, color }) => (
        <div key={label} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
            <Icon className={`h-8 w-8 ${color}`} />
          </div>
        </div>
      ))}
    </div>
  );
};