import express from 'express';
import { getAllCategorys, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController';

const router = express.Router();

router.get('/category', getAllCategorys);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

export default router;