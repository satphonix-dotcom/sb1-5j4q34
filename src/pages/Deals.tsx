import React from 'react';
import { Tag, Clock } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const Deals: React.FC = () => {
  // Mock deals data - replace with API call
  const deals = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 0.15,
      originalPrice: 0.25,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      category: 'Electronics',
      rating: 4.5,
      reviews: 128,
      vendorId: 'v1',
      stock: 50,
      endsIn: '2h 30m'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Today's Deals</h1>
        <div className="flex items-center text-gray-500">
          <Clock className="h-5 w-5 mr-2" />
          <span>Deals refresh daily at midnight UTC</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deals.map(deal => (
          <div key={deal.id} className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)}% OFF
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {deal.endsIn}
              </span>
            </div>
            <ProductCard product={deal} />
          </div>
        ))}
      </div>
    </div>
  );
};