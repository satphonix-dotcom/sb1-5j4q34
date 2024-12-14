import nodemailer from 'nodemailer';
import { Order } from '../types/order';
import { Transaction } from '../types';

class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter;

  private constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendPaymentConfirmation(
    email: string,
    order: Order,
    transaction: Transaction
  ): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Payment Confirmation - Order #${order.id}`,
        html: this.getPaymentConfirmationTemplate(order, transaction)
      });
    } catch (error) {
      console.error('Failed to send payment confirmation email:', error);
      throw error;
    }
  }

  async sendOrderShipped(
    email: string,
    order: Order
  ): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Your Order Has Been Shipped - Order #${order.id}`,
        html: this.getOrderShippedTemplate(order)
      });
    } catch (error) {
      console.error('Failed to send order shipped email:', error);
      throw error;
    }
  }

  private getPaymentConfirmationTemplate(
    order: Order,
    transaction: Transaction
  ): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Payment Confirmation</h1>
        <p>Thank you for your payment. Your order has been confirmed.</p>
        
        <h2>Order Details</h2>
        <p>Order ID: ${order.id}</p>
        <p>Date: ${new Date(order.createdAt).toLocaleDateString()}</p>
        <p>Total: ${order.total} ${order.currency}</p>
        
        <h2>Payment Details</h2>
        <p>Transaction ID: ${transaction.id}</p>
        <p>Amount: ${transaction.amount} ${transaction.currency}</p>
        <p>Status: ${transaction.status}</p>
        
        <h2>Shipping Address</h2>
        <p>${order.shippingDetails.fullName}</p>
        <p>${order.shippingDetails.address}</p>
        <p>${order.shippingDetails.city}, ${order.shippingDetails.postalCode}</p>
        <p>${order.shippingDetails.country}</p>
        
        <p>You can track your order status by logging into your account.</p>
      </div>
    `;
  }

  private getOrderShippedTemplate(order: Order): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Your Order Has Been Shipped</h1>
        <p>Good news! Your order is on its way.</p>
        
        <h2>Tracking Information</h2>
        <p>Tracking Number: ${order.trackingNumber}</p>
        
        <h2>Order Details</h2>
        <p>Order ID: ${order.id}</p>
        <p>Date: ${new Date(order.createdAt).toLocaleDateString()}</p>
        
        <h2>Shipping Address</h2>
        <p>${order.shippingDetails.fullName}</p>
        <p>${order.shippingDetails.address}</p>
        <p>${order.shippingDetails.city}, ${order.shippingDetails.postalCode}</p>
        <p>${order.shippingDetails.country}</p>
        
        <p>You can track your order status by logging into your account.</p>
      </div>
    `;
  }
}

export const emailService = EmailService.getInstance();