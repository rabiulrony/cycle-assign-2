import { Request, Response } from 'express';
import Order from '../models/order';
import Product from '../models/product';
import { handleError } from '../utils/errorHandler';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    const bicycle = await Product.findById(product);
    // console.log(bicycle)
    if (!bicycle || bicycle.quantity < quantity) {
      return res.status(400).json({
        message: 'Insufficient stock',
        success: false,
      });
    }

    bicycle.quantity -= quantity;
    bicycle.inStock = bicycle.quantity > 0;
    await bicycle.save();

    const order = await Order.create({ email, product, quantity, totalPrice });
    res.status(201).json({ 
      message: 'Order created successfully', 
      success: true, 
      data: order 
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);
    res.json({ 
      message: 'Revenue calculated successfully', 
      success: true, 
      data: { totalRevenue: revenue[0]?.totalRevenue || 0 } 
    });
  } catch (error) {
    handleError(res, error);
  }
};
