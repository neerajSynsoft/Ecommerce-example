import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './src/routes/productRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express()
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/testdb');

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World!')
})

// Use product routes
app.use('/api', productRoutes);

// Use category routes
app.use('/api', categoryRoutes);

// Use user routes
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})