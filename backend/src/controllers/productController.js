import Product from '../models/productModel.js';
import { default as json} from '../data/products.json' assert { type: 'json' };

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // Create a new product
// export const createProduct = async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     const savedProduct = await newProduct.save();
//     res.json(savedProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Create multiple products
export const createProduct = async (req, res) => {
  try {
    // Validate that the request body is an array of products
    console.log('req===',req.body);
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: 'Invalid request body. Expected an array of products.' });
    }

    // Create an array to store the saved products
    const savedProducts = [];

    // Iterate through the array of products in the request body
    for (const productData of req.body) {
      // Validate each product based on the Product model schema
      const newProduct = new Product(productData);

      // Save the product to the database
      const savedProduct = await newProduct.save();

      // Add the saved product to the array
      savedProducts.push(savedProduct);
    }

    // Respond with a 201 Created status and the array of created products
    res.status(201).json({ message: 'Products created successfully', products: savedProducts });
  } catch (error) {
    // Handle validation errors or other database-related errors
    res.status(500).json({ error: error.message });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
