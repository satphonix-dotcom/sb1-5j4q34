import { StatusCodes } from 'http-status-codes';
import Order from '../models/Order.js';
import { emailService } from '../services/emailService.js';

export const createOrder = async (req, res) => {
  req.body.userId = req.user.id;
  const order = await Order.create(req.body);

  // Send order confirmation email
  await emailService.sendOrderConfirmation(req.user.email, order);

  res.status(StatusCodes.CREATED).json({
    success: true,
    order
  });
};

export const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Order not found'
    });
  }

  // Check if user is authorized to view this order
  if (order.userId.toString() !== req.user.id && order.vendorId.toString() !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      error: 'Not authorized to view this order'
    });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    order
  });
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });

  res.status(StatusCodes.OK).json({
    success: true,
    orders
  });
};

export const getVendorOrders = async (req, res) => {
  const orders = await Order.find({ vendorId: req.params.vendorId });

  res.status(StatusCodes.OK).json({
    success: true,
    orders
  });
};

export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Order not found'
    });
  }

  // Check if user is the vendor for this order
  if (order.vendorId.toString() !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      error: 'Not authorized to update this order'
    });
  }

  order.status = status;
  await order.save();

  // Send status update email
  if (status === 'shipped') {
    await emailService.sendOrderShipped(order.userId.email, order);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    order
  });
};