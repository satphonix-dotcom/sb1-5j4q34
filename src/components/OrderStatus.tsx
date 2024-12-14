import React from 'react';
import { Package, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Order } from '../types/order';

interface OrderStatusProps {
  status: Order['status'];
  className?: string;
}

export const OrderStatus: React.FC<OrderStatusProps> = ({ status, className = '' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'pending':
        return {
          icon: Clock,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-100',
          label: 'Pending'
        };
      case 'paid':
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bgColor: 'bg-green-100',
          label: 'Paid'
        };
      case 'processing':
        return {
          icon: Package,
          color: 'text-blue-500',
          bgColor: 'bg-blue-100',
          label: 'Processing'
        };
      case 'shipped':
        return {
          icon: Truck,
          color: 'text-purple-500',
          bgColor: 'bg-purple-100',
          label: 'Shipped'
        };
      case 'delivered':
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bgColor: 'bg-green-100',
          label: 'Delivered'
        };
      case 'cancelled':
        return {
          icon: XCircle,
          color: 'text-red-500',
          bgColor: 'bg-red-100',
          label: 'Cancelled'
        };
      default:
        return {
          icon: Clock,
          color: 'text-gray-500',
          bgColor: 'bg-gray-100',
          label: status
        };
    }
  };

  const { icon: Icon, color, bgColor, label } = getStatusConfig();

  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <span className={`p-1.5 rounded-full ${bgColor}`}>
        <Icon className={`h-4 w-4 ${color}`} />
      </span>
      <span className={`text-sm font-medium ${color}`}>{label}</span>
    </div>
  );
};