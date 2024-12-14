import React from 'react';
import { Search } from 'lucide-react';

export const ShippingTracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement tracking logic
  };

  return (
    <div className="mb-16">
      <div className="bg-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Track Your Package
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex gap-4">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button type="submit" className="btn">
              <Search className="h-5 w-5 mr-2" />
              Track
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};