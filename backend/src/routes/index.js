import express from 'express';
import productRoutes from "./productRoutes.js";
import restaurantRoutes from "./restaurantRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

// Use product routes
router.use("/api", productRoutes);

// Use restaurant routes
router.use("/api", restaurantRoutes);

// Use category routes
router.use("/api", categoryRoutes);

// Use user routes
router.use("/api", userRoutes);

export default router;