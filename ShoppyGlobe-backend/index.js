import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js'
import authRoutes from './routes/authRoutes.js'
import requestLogger from './middleware/requestLogger.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());


// Middleware log request
app.use(requestLogger(PORT))

// Routes

app.use('/products', productRoutes)
app.use('/cart', cartRoutes)
app.use(authRoutes)

// Error handlers
app.use(notFound);        // Catch 404
app.use(errorHandler);    // Catch all errors


// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
    })
    .catch(err => console.error('DB connection failed:', err))