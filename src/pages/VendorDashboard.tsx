import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  DollarSign, 
  Users, 
  TrendingUp,
  Plus,
  Settings,
  Star 
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

// Mock data - replace with API calls
const MOCK_STATS = {
  totalSales: 2.5,
  totalOrders: 45,
  totalCustomers: 38,
  averageRating: 4.8
};

const MOCK_RECENT_ORDERS = [
  {
    id: '1',
    customer: 'John Doe',
    amount: 0.25,
    status: 'Processing',
    date: '2024-03-10'
  },
  {
    id: '2',
    customer: 'Jane Smith',
    amount: 0.15,
    status: 'Shipped',
    date: '2024-03-09'
  }
];

export const VendorDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const vendorProfile = user?.vendorProfile;

  if (!vendorProfile) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Vendor profile not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
          <p className="text-gray-600">Welcome back, {vendorProfile.storeName}</p>
        </div>
        <div className="space-x-4">
          <Link to="/vendor/products/new" className="btn">
            <Plus className="h-5 w-5 mr-2" />
            Add Product
          </Link>
          <Link to="/vendor/settings" className="btn-secondary">
            <Settings className="h-5 w-5 mr-2" />
            Store Settings
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalSales} ETH</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalOrders}</p>
            </div>
            <Package className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalCustomers}</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.averageRating}</p>
                <Star className="h-5 w-5 text-yellow-400 ml-1" />
              </div>
            </div>
            <TrendingUp className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {MOCK_RECENT_ORDERS.map(order => (
              <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-indigo-600">{order.amount} ETH</p>
                  <p className="text-sm text-gray-600">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Performance</h2>
          <div className="space-y-4">
            {/* Add charts/graphs here */}
            <p className="text-gray-600">Sales performance visualization coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};