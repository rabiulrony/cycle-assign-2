import { Response } from 'express';

export const handleError = (res: Response, error: any) => {
  res.status(500).json({
    message: 'An error occurred',
    success: false,
    error: error.message || error,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

