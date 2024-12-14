import { StatusCodes } from 'http-status-codes';
import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  req.body.vendorId = req.user.id;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    product
  });
};

export const getAllProducts = async (req, res) => {
  const { search, category, minPrice, maxPrice, sort } = req.query;
  const queryObject = {};

  // Search filter
  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  // Category filter
  if (category) {
    queryObject.category = category;
  }

  // Price filter
  if (minPrice || maxPrice) {
    queryObject.price = {};
    if (minPrice) queryObject.price.$gte = Number(minPrice);
    if (maxPrice) queryObject.price.$lte = Number(maxPrice);
  }

  let result = Product.find(queryObject);

  // Sorting
  if (sort) {
    const sortFields = sort.split(',').join(' ');
    result = result.sort(sortFields);
  } else {
    result = result.sort('-createdAt');
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  const totalProducts = await Product.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalProducts / limit);

  res.status(StatusCodes.OK).json({
    success: true,
    products,
    totalProducts,
    numOfPages
  });
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Product not found'
    });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    product
  });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Product not found'
    });
  }

  // Check if user is the vendor who created the product
  if (product.vendorId.toString() !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      error: 'Not authorized to update this product'
    });
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({
    success: true,
    product: updatedProduct
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Product not found'
    });
  }

  // Check if user is the vendor who created the product
  if (product.vendorId.toString() !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      error: 'Not authorized to delete this product'
    });
  }

  await product.remove();

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Product deleted successfully'
  });
};

export const getVendorProducts = async (req, res) => {
  const products = await Product.find({ vendorId: req.params.vendorId });

  res.status(StatusCodes.OK).json({
    success: true,
    products
  });
};