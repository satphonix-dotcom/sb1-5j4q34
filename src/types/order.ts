export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  currency: string;
}

export interface ShippingDetails {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  vendorId: string;
  items: OrderItem[];
  total: number;
  currency: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  shippingDetails: ShippingDetails;
  trackingNumber?: string;
  createdAt: number;
  updatedAt: number;
  paymentId?: string;
  notes?: string;
}

export interface OrderFilters {
  status?: Order['status'];
  paymentStatus?: Order['paymentStatus'];
  startDate?: Date;
  endDate?: Date;
  vendorId?: string;
}