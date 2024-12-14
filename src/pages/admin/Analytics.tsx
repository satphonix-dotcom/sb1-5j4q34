import React from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// Mock data - replace with API calls
const MOCK_ANALYTICS = {
  totalRevenue: 125.5,
  totalUsers: 1250,
  totalOrders: 450,
  averageOrderValue: 0.28,
  revenueGrowth: 15,
  userGrowth: 8,
  orderGrowth: 12,
  topProducts: [
    { name: 'Wireless Headphones', sales: 45, revenue: 6.75 },
    { name: 'Smart Watch', sales: 38, revenue: 9.5 },
    { name: 'Laptop Bag', sales: 32, revenue: 3.84 }
  ],
  topVendors: [
    { name: 'Tech Store', sales: 120, revenue: 18.0 },
    { name: 'Fashion Outlet', sales: 95, revenue: 14.25 },
    { name: 'Home Goods', sales: 78, revenue: 11.7 }
  ]
};

export const AdminAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_ANALYTICS.totalRevenue} ETH</p>
              <div className="flex items-center mt-2">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">{MOCK_ANALYTICS.revenueGrowth}%</span>
              </div>
            </div>
            <DollarSign className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_ANALYTICS.totalUsers}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">{MOCK_ANALYTICS.userGrowth}%</span>
              </div>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_ANALYTICS.totalOrders}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">{MOCK_ANALYTICS.orderGrowth}%</span>
              </div>
            </div>
            <ShoppingBag className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Order Value</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_ANALYTICS.averageOrderValue} ETH</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">+5%</span>
              </div>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Top Products & Vendors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <div className="space-y-4">
            {MOCK_ANALYTICS.topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} sales</p>
                </div>
                <p className="font-medium text-indigo-600">{product.revenue} ETH</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Top Vendors</h2>
          <div className="space-y-4">
            {MOCK_ANALYTICS.topVendors.map((vendor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{vendor.name}</p>
                  <p className="text-sm text-gray-500">{vendor.sales} sales</p>
                </div>
                <p className="font-medium text-indigo-600">{vendor.revenue} ETH</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};