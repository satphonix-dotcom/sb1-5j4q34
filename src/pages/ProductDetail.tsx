import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Shield, Truck } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

// Using the same mock data - will be replaced with API calls
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 0.15,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics'
  },
  // ... other products
];

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore(state => state.addItem);
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-500">{product.category}</p>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-indigo-600">
                {product.price} ETH
              </span>
              <button
                onClick={() => addItem(product)}
                className="btn"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Truck className="h-5 w-5 text-blue-500" />
              <span>Fast Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};