import React from 'react';
import { Bell, Mail, MessageSquare, ShoppingBag, DollarSign } from 'lucide-react';

export const NotificationSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = React.useState({
    orders: true,
    messages: true,
    promotions: false,
    security: true,
    payments: true
  });

  const [pushNotifications, setPushNotifications] = React.useState({
    orders: true,
    messages: true,
    promotions: true,
    security: true,
    payments: true
  });

  const notifications = [
    {
      id: 'orders',
      label: 'Order Updates',
      description: 'Get notified about your order status changes',
      icon: ShoppingBag
    },
    {
      id: 'messages',
      label: 'Messages',
      description: 'Receive notifications about new messages',
      icon: MessageSquare
    },
    {
      id: 'promotions',
      label: 'Promotions',
      description: 'Stay updated with sales and special offers',
      icon: Bell
    },
    {
      id: 'security',
      label: 'Security Alerts',
      description: 'Important updates about your account security',
      icon: Mail
    },
    {
      id: 'payments',
      label: 'Payment Updates',
      description: 'Get notified about payment confirmations',
      icon: DollarSign
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {notifications.map(({ id, label, description, icon: Icon }) => (
          <div key={id} className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{label}</h3>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={emailNotifications[id as keyof typeof emailNotifications]}
                        onChange={(e) => setEmailNotifications(prev => ({
                          ...prev,
                          [id]: e.target.checked
                        }))}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={pushNotifications[id as keyof typeof pushNotifications]}
                        onChange={(e) => setPushNotifications(prev => ({
                          ...prev,
                          [id]: e.target.checked
                        }))}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Push</span>
                    </label>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Email Frequency</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="frequency"
              defaultChecked
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-600">Send notifications immediately</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="frequency"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-600">Send a daily digest</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="frequency"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-600">Send a weekly digest</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="btn">Save Preferences</button>
      </div>
    </div>
  );
};