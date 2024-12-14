import React from 'react';
import { OrderHistory } from '../components/profile/OrderHistory';

export const Orders: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <OrderHistory />
    </div>
  );
};