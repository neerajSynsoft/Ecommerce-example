import express from 'express';
import {
    getAllUsers,
    getUserById,
    loginUser,
    updateUserPassword,
    deleteUser,
    registerUser,
    enable2fa,
  } from '../controllers/userController.js';

const router = express.Router();

router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/enable2fa', enable2fa);
router.put('/user/:id/password', updateUserPassword);
router.delete('/user/:id', deleteUser);

export default router;