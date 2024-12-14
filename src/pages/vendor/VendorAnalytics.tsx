import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Users,
  Star,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { LineChart } from '../../components/charts/LineChart';
import { vendorService } from '../../services/vendorService';
import { VendorStats } from '../../types/vendor';

export const VendorAnalytics: React.FC = () => {
  const [stats, setStats] = React.useState<VendorStats | null>(null);
  const [timeframe, setTimeframe] = React.useState<'day' | 'week' | 'month' | 'year'>('month');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await vendorService.getVendorStats('vendor_id'); // Replace with actual vendor ID
        setStats(data);
      } catch (error) {
        console.error('Failed to load vendor stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStats();
  }, []);

  if (isLoading) {
    return <div>Loading analytics...</div>;
  }

  if (!stats) {
    return <div>Failed to load analytics</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as typeof timeframe)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalSales}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">12%</span>
              </div>
            </div>
            <DollarSign className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">8%</span>
              </div>
            </div>
            <ShoppingBag className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">15%</span>
              </div>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-900">{stats.rating}</p>
                <Star className="h-5 w-5 text-yellow-400 ml-1" />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {stats.reviewCount} reviews
              </p>
            </div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
        <div className="h-80">
          <LineChart
            data={[
              { date: '2024-01', value: 1200 },
              { date: '2024-02', value: 1900 },
              { date: '2024-03', value: 2400 }
            ]}
          />
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Total Products</p>
                <p className="text-sm text-gray-500">{stats.totalProducts} products listed</p>
              </div>
              <p className="text-lg font-semibold">{stats.activeProducts} active</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Average Order Value</p>
                <p className="text-sm text-gray-500">Per transaction</p>
              </div>
              <p className="text-lg font-semibold">${stats.averageOrderValue}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Insights</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Repeat Customers</p>
                <p className="text-sm text-gray-500">Purchased more than once</p>
              </div>
              <p className="text-lg font-semibold">45%</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Customer Satisfaction</p>
                <p className="text-sm text-gray-500">Based on reviews</p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold mr-1">{stats.rating}</p>
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};