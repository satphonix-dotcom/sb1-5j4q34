import React from 'react';
import { DollarSign, Package, Users, Star } from 'lucide-react';

export const DashboardStats: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      label: 'Total Sales',
      value: '2.5 ETH',
      change: '+15%',
      changeType: 'positive' as const
    },
    {
      icon: Package,
      label: 'Total Orders',
      value: '45',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      icon: Users,
      label: 'Total Customers',
      value: '38',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      icon: Star,
      label: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive' as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map(({ icon: Icon, label, value, change, changeType }) => (
        <div key={label} className="bg-velvet-dark rounded-lg shadow-md p-6 border border-velvet-accent/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-velvet-muted">{label}</p>
              <p className="text-2xl font-heading font-heading1 text-velvet-light">{value}</p>
              <div className={`flex items-center mt-2 ${
                changeType === 'positive' ? 'text-green-500' : 'text-red-500'
              }`}>
                <span className="text-sm">{change}</span>
              </div>
            </div>
            <Icon className="h-8 w-8 text-velvet-accent" />
          </div>
        </div>
      ))}
    </div>
  );
};