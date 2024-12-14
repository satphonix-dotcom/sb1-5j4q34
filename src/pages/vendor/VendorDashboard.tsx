import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { DashboardStats } from '../../components/vendor/dashboard/DashboardStats';
import { DashboardChart } from '../../components/vendor/dashboard/DashboardChart';
import { RecentOrders } from '../../components/vendor/dashboard/RecentOrders';
import { TopProducts } from '../../components/vendor/dashboard/TopProducts';
import { InventoryAlerts } from '../../components/vendor/dashboard/InventoryAlerts';
import { PerformanceMetrics } from '../../components/vendor/dashboard/PerformanceMetrics';

export const VendorDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const vendorProfile = user?.vendorProfile;

  if (!vendorProfile) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-velvet-light">Vendor profile not found</h2>
        <p className="mt-2 text-velvet-muted">Please complete your vendor profile setup</p>
        <Link to="/vendor/onboarding" className="btn mt-4">
          Complete Setup
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-heading1 text-velvet-light">Vendor Dashboard</h1>
          <p className="text-velvet-muted">Welcome back, {vendorProfile.storeName}</p>
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

      {/* Stats */}
      <DashboardStats />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DashboardChart />
        <PerformanceMetrics />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentOrders />
        <TopProducts />
      </div>

      {/* Alerts */}
      <InventoryAlerts />
    </div>
  );
};