import express from 'express';
import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

// Use product routes
router.use("/api", productRoutes);

// Use category routes
router.use("/api", categoryRoutes);

// Use user routes
router.use("/api", userRoutes);

export default router;