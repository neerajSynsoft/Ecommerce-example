import express from 'express';
import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

// Use product routes
app.use("/api", productRoutes);

// Use category routes
app.use("/api", categoryRoutes);

// Use user routes
app.use("/api", userRoutes);

export default router;