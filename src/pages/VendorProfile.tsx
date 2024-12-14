import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Shield, Package } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

// Mock vendor data - replace with API call
const MOCK_VENDOR = {
  id: '1',
  storeName: 'Tech Gadgets Store',
  description: 'Your one-stop shop for all tech gadgets and accessories. We offer the latest and most innovative products at competitive prices.',
  logo: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=500',
  rating: 4.8,
  totalSales: 1250,
  joinedDate: '2023-01-15',
  verified: true,
  location: 'New York, USA'
};

// Mock products data - replace with API call
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 0.15,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    vendorId: '1',
    stock: 10,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking features',
    price: 0.25,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    vendorId: '1',
    stock: 15,
    rating: 4.7,
    reviews: 89
  }
];

export const VendorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = MOCK_VENDOR; // In real app, fetch vendor by id

  return (
    <div className="space-y-8">
      {/* Vendor Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-6">
          <img
            src={vendor.logo}
            alt={vendor.storeName}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">{vendor.storeName}</h1>
              {vendor.verified && (
                <Shield className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <p className="mt-2 text-gray-600">{vendor.description}</p>
            <div className="mt-4 flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{vendor.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">
                  Joined {new Date(vendor.joinedDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">{vendor.totalSales}</p>
            </div>
            <Package className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-900">{vendor.rating}</p>
                <Star className="h-5 w-5 text-yellow-400 ml-1" />
              </div>
            </div>
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  className="h-6 w-6 rounded-full ring-2 ring-white"
                  src={`https://i.pravatar.cc/100?img=${i + 1}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Products</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_PRODUCTS.length}</p>
            </div>
            <Package className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Products */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};