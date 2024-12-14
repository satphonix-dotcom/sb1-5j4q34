import React from 'react';
import { DollarSign, Users, TrendingUp, Gift } from 'lucide-react';

export const AffiliateStats: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      value: '2.5M+',
      label: 'Commissions Paid',
      color: 'text-green-500'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Affiliates',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      value: '25%',
      label: 'Average Commission',
      color: 'text-indigo-500'
    },
    {
      icon: Gift,
      value: '50K+',
      label: 'Successful Referrals',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
      {stats.map(({ icon: Icon, value, label, color }) => (
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