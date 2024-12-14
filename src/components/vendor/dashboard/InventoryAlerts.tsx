import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export const InventoryAlerts: React.FC = () => {
  // Mock data - replace with real data from API
  const alerts = [
    {
      id: '1',
      product: 'Premium Wireless Headphones',
      stock: 3,
      threshold: 5
    },
    {
      id: '2',
      product: 'Smart Watch Pro',
      stock: 2,
      threshold: 10
    }
  ];

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Low Stock Alerts</h2>
        <Link 
          to="/vendor/inventory" 
          className="text-indigo-600 hover:text-indigo-500 flex items-center"
        >
          Manage Inventory
          <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {alerts.map(alert => (
          <div key={alert.id} className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3" />
              <div>
                <p className="font-medium">{alert.product}</p>
                <p className="text-sm text-gray-500">
                  Only {alert.stock} units left (Threshold: {alert.threshold})
                </p>
              </div>
            </div>
            <Link 
              to={`/vendor/products/${alert.id}/edit`}
              className="btn-secondary"
            >
              Update Stock
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};