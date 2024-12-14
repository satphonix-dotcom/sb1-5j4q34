import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight } from 'lucide-react';
import { OrderStatus } from '../../OrderStatus';

export const RecentOrders: React.FC = () => {
  // Mock data - replace with real data from API
  const orders = [
    {
      id: '1',
      customer: 'John Doe',
      amount: 0.25,
      status: 'processing',
      date: '2024-03-10'
    },
    {
      id: '2',
      customer: 'Jane Smith',
      amount: 0.15,
      status: 'shipped',
      date: '2024-03-09'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        <Link 
          to="/vendor/orders" 
          className="text-indigo-600 hover:text-indigo-500 flex items-center"
        >
          View all
          <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.customer}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-indigo-600">{order.amount} ETH</p>
              <OrderStatus status={order.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};