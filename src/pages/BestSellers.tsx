import React from 'react';
import { TrendingUp } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const BestSellers: React.FC = () => {
  // Mock best sellers data - replace with API call
  const bestSellers = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 0.15,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      category: 'Electronics',
      rating: 4.5,
      reviews: 128,
      vendorId: 'v1',
      stock: 50,
      rank: 1
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Best Sellers</h1>
        <div className="flex items-center text-gray-500">
          <TrendingUp className="h-5 w-5 mr-2" />
          <span>Updated hourly</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellers.map(product => (
          <div key={product.id} className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                #{product.rank}
              </span>
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};