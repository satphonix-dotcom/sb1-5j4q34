import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Search, Filter } from 'lucide-react';
import { Order } from '../../types/order';
import { OrderStatus } from '../OrderStatus';

export const OrderHistory: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    // Mock data - replace with API call
    const mockOrders: Order[] = [
      {
        id: '1',
        userId: 'user1',
        vendorId: 'vendor1',
        items: [
          {
            productId: 'prod1',
            name: 'Wireless Headphones',
            quantity: 1,
            price: 0.15,
            currency: 'ETH'
          }
        ],
        total: 0.15,
        currency: 'ETH',
        status: 'delivered',
        paymentStatus: 'completed',
        shippingDetails: {
          fullName: 'John Doe',
          address: '123 Main St',
          city: 'New York',
          country: 'USA',
          postalCode: '10001',
          phone: '+1234567890'
        },
        trackingNumber: 'TRK123456',
        createdAt: Date.now() - 86400000 * 3, // 3 days ago
        updatedAt: Date.now() - 86400000 * 2  // 2 days ago
      },
      {
        id: '2',
        userId: 'user1',
        vendorId: 'vendor2',
        items: [
          {
            productId: 'prod2',
            name: 'Smart Watch',
            quantity: 1,
            price: 0.25,
            currency: 'ETH'
          }
        ],
        total: 0.25,
        currency: 'ETH',
        status: 'shipped',
        paymentStatus: 'completed',
        shippingDetails: {
          fullName: 'John Doe',
          address: '123 Main St',
          city: 'New York',
          country: 'USA',
          postalCode: '10001',
          phone: '+1234567890'
        },
        trackingNumber: 'TRK789012',
        createdAt: Date.now() - 86400000, // 1 day ago
        updatedAt: Date.now() - 43200000  // 12 hours ago
      }
    ];

    setOrders(mockOrders);
    setIsLoading(false);
  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'all' || order.status === filter;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Package className="h-12 w-12 text-gray-400 mx-auto animate-spin" />
        <p className="mt-2 text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="h-12 w-12 text-gray-400 mx-auto" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">No orders yet</h3>
        <p className="mt-1 text-gray-500">Start shopping to see your orders here</p>
        <Link to="/products" className="mt-4 btn inline-flex">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="sm:w-48 flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Order #{order.id}
                </h3>
                <p className="text-sm text-gray-500">
                  Placed on {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <OrderStatus status={order.status} />
            </div>

            <div className="border-t border-gray-200 pt-4">
              {order.items.map((item) => (
                <div key={item.productId} className="flex justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-gray-900">
                    {item.price * item.quantity} {item.currency}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between">
                <p className="font-medium text-gray-900">Total</p>
                <p className="font-medium text-indigo-600">
                  {order.total} {order.currency}
                </p>
              </div>
            </div>

            {order.trackingNumber && (
              <div className="mt-4 text-sm">
                <p className="text-gray-500">
                  Tracking Number: <span className="font-medium">{order.trackingNumber}</span>
                </p>
              </div>
            )}

            <div className="mt-6">
              <Link
                to={`/orders/${order.id}`}
                className="btn-secondary w-full text-center"
              >
                View Order Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};