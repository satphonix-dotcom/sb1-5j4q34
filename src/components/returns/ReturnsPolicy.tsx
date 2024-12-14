import React from 'react';
import { Check, X } from 'lucide-react';

export const ReturnsPolicy: React.FC = () => {
  const eligibleItems = [
    'Unused and unworn items',
    'Items in original packaging',
    'Items with tags attached',
    'Defective or damaged items'
  ];

  const ineligibleItems = [
    'Customized or personalized items',
    'Digital products and downloads',
    'Items marked as final sale',
    'Personal care items'
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Return Policy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            Eligible for Return
          </h3>
          <ul className="space-y-3">
            {eligibleItems.map((item) => (
              <li key={item} className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <X className="h-5 w-5 text-red-500 mr-2" />
            Not Eligible for Return
          </h3>
          <ul className="space-y-3">
            {ineligibleItems.map((item) => (
              <li key={item} className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};