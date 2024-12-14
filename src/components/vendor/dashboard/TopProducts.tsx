import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

export const TopProducts: React.FC = () => {
  // Mock data - replace with real data from API
  const products = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      sales: 45,
      revenue: 6.75,
      rating: 4.5
    },
    {
      id: '2',
      name: 'Smart Watch Pro',
      sales: 38,
      revenue: 9.5,
      rating: 4.7
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
        <Link 
          to="/vendor/products" 
          className="text-indigo-600 hover:text-indigo-500 flex items-center"
        >
          View all
          <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between border-b pb-4 last:border-0">
            <div>
              <p className="font-medium">{product.name}</p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                <span className="text-sm text-gray-500 ml-2">{product.sales} sales</span>
              </div>
            </div>
            <p className="font-medium text-indigo-600">{product.revenue} ETH</p>
          </div>
        ))}
      </div>
    </div>
  );
};