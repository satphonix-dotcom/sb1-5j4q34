import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  Shield, 
  Wallet,
  Coins,
  CircleDollarSign,
  DollarSign,
  Star,
  ChevronRight,
  Clock
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

// Mock featured products
const FEATURED_PRODUCTS = [
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
    stock: 50
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking features',
    price: 0.25,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    rating: 4.7,
    reviews: 89,
    vendorId: 'v1',
    stock: 30
  },
  {
    id: '3',
    name: 'Organic Coffee Beans',
    description: 'Premium organic coffee beans from South America',
    price: 0.05,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500',
    category: 'Food & Beverages',
    rating: 4.8,
    reviews: 256,
    vendorId: 'v2',
    stock: 100
  },
  {
    id: '4',
    name: 'Designer Laptop Bag',
    description: 'Stylish and functional laptop bag with multiple compartments',
    price: 0.12,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Accessories',
    rating: 4.6,
    reviews: 75,
    vendorId: 'v3',
    stock: 45
  }
];

const CATEGORIES = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500',
    count: 2500
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
    count: 1800
  },
  {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500',
    count: 1200
  },
  {
    name: 'Art & Collectibles',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500',
    count: 950
  }
];

export const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1645729141998-fb8f1265043f?w=1800"
            alt="Crypto Shopping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shop the Future: Crypto-Only Shopping Made Easy!
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your favorite products, powered by blockchain technology. Experience secure, 
              seamless shopping with cryptocurrency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about-crypto" className="btn-secondary bg-white/10 text-white hover:bg-white/20">
                Learn About Crypto Payments
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              Every purchase is protected by blockchain technology
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
              <Wallet className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Cryptocurrencies</h3>
            <p className="text-gray-600">
              Pay with your preferred cryptocurrency
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Trading</h3>
            <p className="text-gray-600">
              Shop anytime with instant crypto payments
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-indigo-600 hover:text-indigo-500 flex items-center"
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map(category => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <p className="text-gray-200">{category.count}+ Products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Crypto Payment Info */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">
                Pay with Your Favorite Cryptocurrency
              </h2>
              <p className="text-lg text-indigo-100 mb-8">
                We support multiple cryptocurrencies for a seamless shopping experience. 
                Connect your wallet and start shopping instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 rounded-lg p-4 flex items-center">
                  <Coins className="h-6 w-6 mr-2" />
                  <span>Bitcoin</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4 flex items-center">
                  <CircleDollarSign className="h-6 w-6 mr-2" />
                  <span>Ethereum</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" />
                  <span>USDT</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800"
                alt="Crypto Payments"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Secure Blockchain Transactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">100K+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
            <div className="text-gray-600">Successful Transactions</div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Crypto Shopping
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest products, crypto payment tips, 
            and exclusive deals.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};