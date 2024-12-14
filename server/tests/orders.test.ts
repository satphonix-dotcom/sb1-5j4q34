import request from 'supertest';
import app from '../index';
import { User } from '../models/User';
import Order from '../models/Order';

describe('Order Endpoints', () => {
  let token: string;
  let userId: string;

  const testOrder = {
    items: [
      {
        productId: '123456789012345678901234',
        quantity: 1,
        price: 0.15
      }
    ],
    total: 0.15,
    shippingDetails: {
      fullName: 'Test User',
      address: '123 Test St',
      city: 'Test City',
      country: 'Test Country',
      postalCode: '12345',
      phone: '1234567890'
    }
  };

  beforeEach(async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'user@example.com',
      password: 'password123'
    });
    userId = user._id;

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@example.com',
        password: 'password123'
      });

    token = res.body.token;
  });

  describe('POST /api/orders', () => {
    it('should create a new order', async () => {
      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${token}`)
        .send(testOrder);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.order.total).toBe(testOrder.total);
    });
  });

  describe('GET /api/orders/user/:userId', () => {
    beforeEach(async () => {
      await Order.create({ ...testOrder, userId });
    });

    it('should get user orders', async () => {
      const res = await request(app)
        .get(`/api/orders/user/${userId}`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.orders).toHaveLength(1);
    });
  });
});