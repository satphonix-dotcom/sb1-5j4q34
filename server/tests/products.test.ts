import request from 'supertest';
import app from '../index';
import { User } from '../models/User';
import Product from '../models/Product';

describe('Product Endpoints', () => {
  let token: string;
  let vendorId: string;

  const testProduct = {
    name: 'Test Product',
    description: 'Test description',
    price: 0.15,
    category: 'Electronics',
    stock: 10
  };

  beforeEach(async () => {
    // Create vendor user and get token
    const vendor = await User.create({
      name: 'Test Vendor',
      email: 'vendor@example.com',
      password: 'password123',
      isVendor: true
    });
    vendorId = vendor._id;

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'vendor@example.com',
        password: 'password123'
      });

    token = res.body.token;
  });

  describe('POST /api/products', () => {
    it('should create a new product', async () => {
      const res = await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${token}`)
        .send(testProduct);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.product.name).toBe(testProduct.name);
    });

    it('should not create product without auth', async () => {
      const res = await request(app)
        .post('/api/products')
        .send(testProduct);

      expect(res.status).toBe(401);
    });
  });

  describe('GET /api/products', () => {
    beforeEach(async () => {
      await Product.create({ ...testProduct, vendorId });
    });

    it('should get all products', async () => {
      const res = await request(app).get('/api/products');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.products).toHaveLength(1);
    });

    it('should filter products by category', async () => {
      const res = await request(app)
        .get('/api/products')
        .query({ category: 'Electronics' });

      expect(res.status).toBe(200);
      expect(res.body.products).toHaveLength(1);
    });
  });
});