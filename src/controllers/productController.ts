import { Request, Response } from 'express';
import Product from '../models/product';
import { handleError } from '../utils/errorHandler';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ 
      message: 'Bicycle created successfully', 
      success: true, 
      data: product 
    });
  } catch (error) {
    handleError(res, error);
  }
};


export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const query = searchTerm ? { $text: { $search: searchTerm as string } } : {};
    const products = await Product.find(query);
    res.json({ 
      message: 'Bicycles retrieved successfully', 
      success: true, 
      data: products 
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ 
          message: 'Bicycle not found', 
          success: false 
        });
      }
  
      res.json({ 
        message: 'Bicycle retrieved successfully', 
        success: true, 
        data: product 
      });
    } catch (error) {
      handleError(res, error);
    }
  };


  export const updateProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const updateData = req.body;
  
      const product = await Product.findByIdAndUpdate(productId, updateData, {
        new: true,
        runValidators: true,
      });
  
      if (!product) {
        return res.status(404).json({ 
          message: 'Bicycle not found', 
          success: false 
        });
      }
  
      res.json({ 
        message: 'Bicycle updated successfully', 
        success: true, 
        data: product 
      });
    } catch (error) {
      handleError(res, error);
    }
  };

  export const deleteProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
  
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(404).json({ 
          message: 'Bicycle not found', 
          success: false 
        });
      }
  
      res.json({ 
        message: 'Bicycle deleted successfully', 
        success: true, 
        data: {} 
      });
    } catch (error) {
      handleError(res, error);
    }
  };