import React from 'react';
import { ClipboardList, Package, Truck, CreditCard } from 'lucide-react';

export const ReturnsProcess: React.FC = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Request Return',
      description: 'Fill out our simple return form with your order details'
    },
    {
      icon: Package,
      title: 'Package Item',
      description: 'Securely pack the item in its original packaging'
    },
    {
      icon: Truck,
      title: 'Ship Return',
      description: 'Use our prepaid shipping label to send the item back'
    },
    {
      icon: CreditCard,
      title: 'Get Refund',
      description: 'Receive your refund in your original payment method'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        How Returns Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed border-gray-200" />
            )}
            <div className="bg-white rounded-lg shadow-md p-6 relative z-10">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};