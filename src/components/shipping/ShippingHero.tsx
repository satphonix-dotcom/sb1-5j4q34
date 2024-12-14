import React from 'react';
import { Truck } from 'lucide-react';

export const ShippingHero: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
        <Truck className="h-8 w-8 text-indigo-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Fast, reliable shipping worldwide. Track your packages and get estimated delivery times
        for your location.
      </p>
    </div>
  );
};