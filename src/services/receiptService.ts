import { jsPDF } from 'jspdf';
import { Order } from '../types/order';
import { Transaction } from '../types';

class ReceiptService {
  private static instance: ReceiptService;
  
  private constructor() {}

  static getInstance(): ReceiptService {
    if (!ReceiptService.instance) {
      ReceiptService.instance = new ReceiptService();
    }
    return ReceiptService.instance;
  }

  async generateReceipt(order: Order, transaction: Transaction): Promise<Blob> {
    const doc = new jsPDF();
    const margin = 20;
    let y = margin;

    // Header
    doc.setFontSize(20);
    doc.text('Payment Receipt', margin, y);
    y += 15;

    // Order Details
    doc.setFontSize(12);
    doc.text(`Order #${order.id}`, margin, y);
    y += 10;
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, margin, y);
    y += 15;

    // Customer Details
    doc.text('Shipping Details:', margin, y);
    y += 7;
    doc.setFontSize(10);
    doc.text(order.shippingDetails.fullName, margin, y);
    y += 5;
    doc.text(order.shippingDetails.address, margin, y);
    y += 5;
    doc.text(`${order.shippingDetails.city}, ${order.shippingDetails.postalCode}`, margin, y);
    y += 5;
    doc.text(order.shippingDetails.country, margin, y);
    y += 15;

    // Items
    doc.setFontSize(12);
    doc.text('Items:', margin, y);
    y += 10;

    // Table Header
    const columns = ['Item', 'Quantity', 'Price', 'Total'];
    const columnWidths = [80, 20, 30, 30];
    let x = margin;
    
    columns.forEach((col, i) => {
      doc.text(col, x, y);
      x += columnWidths[i];
    });
    y += 5;
    doc.line(margin, y, 190, y);
    y += 10;

    // Table Content
    order.items.forEach(item => {
      x = margin;
      doc.text(item.name, x, y);
      x += columnWidths[0];
      doc.text(item.quantity.toString(), x, y);
      x += columnWidths[1];
      doc.text(`${item.price} ${item.currency}`, x, y);
      x += columnWidths[2];
      doc.text(`${item.price * item.quantity} ${item.currency}`, x, y);
      y += 7;
    });

    y += 10;
    doc.line(margin, y, 190, y);
    y += 10;

    // Total
    doc.setFontSize(12);
    doc.text('Total:', 140, y);
    doc.text(`${order.total} ${order.currency}`, 170, y);
    y += 15;

    // Payment Details
    doc.text('Payment Details:', margin, y);
    y += 10;
    doc.setFontSize(10);
    doc.text(`Transaction ID: ${transaction.id}`, margin, y);
    y += 5;
    doc.text(`Payment Method: ${transaction.currency} (${transaction.network})`, margin, y);
    y += 5;
    doc.text(`Status: ${transaction.status}`, margin, y);
    y += 5;
    if (transaction.hash) {
      doc.text(`Transaction Hash: ${transaction.hash}`, margin, y);
    }

    // Footer
    doc.setFontSize(8);
    doc.text('Thank you for your purchase!', margin, 280);

    return doc.output('blob');
  }

  async downloadReceipt(order: Order, transaction: Transaction): Promise<void> {
    const blob = await this.generateReceipt(order, transaction);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `receipt-${order.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export const receiptService = ReceiptService.getInstance();