import React from 'react';
import { Truck, Plane, Clock, Zap } from 'lucide-react';

export const ShippingMethods: React.FC = () => {
  const methods = [
    {
      icon: Truck,
      name: 'Standard Shipping',
      time: '5-7 business days',
      price: 'Free over $50',
      description: 'Economic shipping option for non-urgent deliveries'
    },
    {
      icon: Zap,
      name: 'Express Shipping',
      time: '2-3 business days',
      price: '$15',
      description: 'Fast delivery for time-sensitive orders'
    },
    {
      icon: Plane,
      name: 'International',
      time: '7-14 business days',
      price: 'Calculated at checkout',
      description: 'Worldwide shipping with customs handling'
    },
    {
      icon: Clock,
      name: 'Same Day Delivery',
      time: 'Same business day',
      price: '$25',
      description: 'Available in select cities for orders before 2 PM'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Shipping Methods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {methods.map(({ icon: Icon, name, time, price, description }) => (
          <div key={name} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 rounded-lg p-3">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Delivery Time: {time}</p>
              <p>Cost: {price}</p>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};