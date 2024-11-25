import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';


const app: Application = express()


// middleware
app.use(cors());
app.use(express.json())


// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.get('/', (req:Request, res:Response) => {
  res.send({
    status: true,
    message: "Server is live",
  })
})

export default app;