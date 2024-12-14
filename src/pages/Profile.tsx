import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Package, 
  CreditCard, 
  LogOut, 
  Store, 
  Heart,
  Settings,
  Bell,
  Shield
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { OrderHistory } from '../components/profile/OrderHistory';
import { SavedItems } from '../components/profile/SavedItems';
import { PaymentMethods } from '../components/profile/PaymentMethods';
import { SecuritySettings } from '../components/profile/SecuritySettings';
import { NotificationSettings } from '../components/profile/NotificationSettings';
import { ProfileInfo } from '../components/profile/ProfileInfo';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = React.useState<string>('profile');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'saved', label: 'Saved Items', icon: Heart },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* User Info */}
            <div className="text-center">
              <div className="inline-block p-2 rounded-full bg-gray-100 mb-4">
                <User className="h-12 w-12 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {label}
                </button>
              ))}
            </nav>

            <div className="pt-6 border-t">
              {!user.isVendor && (
                <Link
                  to="/vendor/onboarding"
                  className="w-full btn-secondary flex items-center justify-center mb-4"
                >
                  <Store className="h-5 w-5 mr-2" />
                  Become a Vendor
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="w-full btn-secondary flex items-center justify-center text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === 'profile' && <ProfileInfo user={user} />}
            {activeTab === 'orders' && <OrderHistory />}
            {activeTab === 'saved' && <SavedItems />}
            {activeTab === 'payments' && <PaymentMethods />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};