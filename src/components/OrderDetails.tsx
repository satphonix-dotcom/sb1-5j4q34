import React from 'react';
import { Order } from '../types/order';
import { OrderStatus } from './OrderStatus';
import { OrderTimeline } from './OrderTimeline';

interface OrderDetailsProps {
  order: Order;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Order #{order.id}
          </h2>
          <p className="text-sm text-gray-500">
            Placed {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
        <OrderStatus status={order.status} />
      </div>

      <div className="border-t border-gray-200 py-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Order Timeline</h3>
        <OrderTimeline order={order} />
      </div>

      <div className="border-t border-gray-200 py-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Items</h3>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.productId} className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {item.price * item.quantity} {item.currency}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Shipping Details</h3>
        <div className="text-sm text-gray-600">
          <p>{order.shippingDetails.fullName}</p>
          <p>{order.shippingDetails.address}</p>
          <p>{order.shippingDetails.city}, {order.shippingDetails.postalCode}</p>
          <p>{order.shippingDetails.country}</p>
          <p>Phone: {order.shippingDetails.phone}</p>
        </div>
        {order.trackingNumber && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-900">Tracking Number</p>
            <p className="text-sm text-gray-600">{order.trackingNumber}</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>{order.total} {order.currency}</p>
        </div>
      </div>
    </div>
  );
};