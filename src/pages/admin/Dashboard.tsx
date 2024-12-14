import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Store,
  ShoppingBag,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  Activity,
} from 'lucide-react';

// Mock data - replace with API calls
const MOCK_STATS = {
  totalUsers: 1250,
  totalVendors: 45,
  totalProducts: 890,
  totalSales: 25.5,
  pendingVerifications: 12,
  monthlyGrowth: '+15%',
};

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <Link to="/admin/settings" className="btn-secondary">
            Platform Settings
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalUsers}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Vendors</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalVendors}</p>
            </div>
            <Store className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalProducts}</p>
            </div>
            <ShoppingBag className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalSales} ETH</p>
            </div>
            <DollarSign className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Verifications</p>
              <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.pendingVerifications}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Growth</p>
              <p className="text-2xl font-bold text-green-600">{MOCK_STATS.monthlyGrowth}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-indigo-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { action: 'New vendor registration', time: '5 minutes ago' },
              { action: 'Product reported', time: '15 minutes ago' },
              { action: 'Vendor verification approved', time: '1 hour ago' },
              { action: 'New user registration', time: '2 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4 last:border-0">
                <span className="text-gray-600">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/admin/users" className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Manage Users
            </Link>
            <Link to="/admin/vendors" className="btn-secondary">
              <Store className="h-5 w-5 mr-2" />
              Manage Vendors
            </Link>
            <Link to="/admin/products" className="btn-secondary">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Manage Products
            </Link>
            <Link to="/admin/verifications" className="btn-secondary">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Pending Verifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};