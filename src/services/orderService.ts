import { Order, OrderFilters, ShippingDetails } from '../types/order';

class OrderService {
  private static instance: OrderService;
  
  private constructor() {}

  static getInstance(): OrderService {
    if (!OrderService.instance) {
      OrderService.instance = new OrderService();
    }
    return OrderService.instance;
  }

  async createOrder(
    userId: string,
    vendorId: string,
    items: Order['items'],
    shippingDetails: ShippingDetails
  ): Promise<Order> {
    // In a real app, this would be an API call
    const order: Order = {
      id: Math.random().toString(36).substring(7),
      userId,
      vendorId,
      items,
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      currency: items[0].currency, // Assuming all items have the same currency
      status: 'pending',
      paymentStatus: 'pending',
      shippingDetails,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    // Store in localStorage for demo
    const orders = this.getStoredOrders();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    return order;
  }

  async getOrders(filters?: OrderFilters): Promise<Order[]> {
    let orders = this.getStoredOrders();

    if (filters) {
      orders = orders.filter(order => {
        if (filters.status && order.status !== filters.status) return false;
        if (filters.paymentStatus && order.paymentStatus !== filters.paymentStatus) return false;
        if (filters.vendorId && order.vendorId !== filters.vendorId) return false;
        if (filters.startDate && order.createdAt < filters.startDate.getTime()) return false;
        if (filters.endDate && order.createdAt > filters.endDate.getTime()) return false;
        return true;
      });
    }

    return orders;
  }

  async getOrderById(id: string): Promise<Order | null> {
    const orders = this.getStoredOrders();
    return orders.find(order => order.id === id) || null;
  }

  async updateOrderStatus(
    orderId: string,
    status: Order['status'],
    trackingNumber?: string
  ): Promise<Order | null> {
    const orders = this.getStoredOrders();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    
    if (orderIndex === -1) return null;

    orders[orderIndex] = {
      ...orders[orderIndex],
      status,
      trackingNumber,
      updatedAt: Date.now()
    };

    localStorage.setItem('orders', JSON.stringify(orders));
    return orders[orderIndex];
  }

  async updatePaymentStatus(
    orderId: string,
    paymentStatus: Order['paymentStatus'],
    paymentId?: string
  ): Promise<Order | null> {
    const orders = this.getStoredOrders();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    
    if (orderIndex === -1) return null;

    orders[orderIndex] = {
      ...orders[orderIndex],
      paymentStatus,
      paymentId,
      updatedAt: Date.now()
    };

    localStorage.setItem('orders', JSON.stringify(orders));
    return orders[orderIndex];
  }

  private getStoredOrders(): Order[] {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  }
}

export const orderService = OrderService.getInstance();