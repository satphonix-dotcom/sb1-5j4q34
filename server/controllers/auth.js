import { StatusCodes } from 'http-status-codes';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: 'Email already registered'
    });
  }

  const user = await User.create({ name, email, password });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.status(StatusCodes.CREATED).json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isVendor: user.isVendor,
      isAdmin: user.isAdmin
    },
    token
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.status(StatusCodes.OK).json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isVendor: user.isVendor,
      isAdmin: user.isAdmin
    },
    token
  });
};

export const logout = async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Logged out successfully'
  });
};

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    user: req.user
  });
};