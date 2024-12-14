import React from 'react';
import { Order } from '../types/order';
import { formatDistanceToNow } from 'date-fns';

interface OrderTimelineProps {
  order: Order;
}

export const OrderTimeline: React.FC<OrderTimelineProps> = ({ order }) => {
  const timelineEvents = [
    {
      status: 'pending',
      label: 'Order Placed',
      date: order.createdAt,
      completed: true
    },
    {
      status: 'paid',
      label: 'Payment Confirmed',
      date: order.paymentStatus === 'completed' ? order.updatedAt : null,
      completed: order.paymentStatus === 'completed'
    },
    {
      status: 'processing',
      label: 'Processing Order',
      date: order.status === 'processing' ? order.updatedAt : null,
      completed: ['processing', 'shipped', 'delivered'].includes(order.status)
    },
    {
      status: 'shipped',
      label: 'Order Shipped',
      date: order.status === 'shipped' ? order.updatedAt : null,
      completed: ['shipped', 'delivered'].includes(order.status)
    },
    {
      status: 'delivered',
      label: 'Order Delivered',
      date: order.status === 'delivered' ? order.updatedAt : null,
      completed: order.status === 'delivered'
    }
  ];

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {timelineEvents.map((event, index) => (
          <li key={event.status}>
            <div className="relative pb-8">
              {index !== timelineEvents.length - 1 && (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                    event.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`}>
                    <svg
                      className={`h-5 w-5 ${event.completed ? 'text-white' : 'text-gray-400'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {event.completed ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                    </svg>
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className={`text-sm font-medium ${
                      event.completed ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {event.label}
                    </p>
                  </div>
                  {event.date && (
                    <div className="text-right text-sm text-gray-500">
                      {formatDistanceToNow(event.date, { addSuffix: true })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};