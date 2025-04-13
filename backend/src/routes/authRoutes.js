import express from 'express'
import { login,forget } from '../controller/authController.js';

const router = express.Router();

router.post('/login',login);

router.post('/forget-password',forget);

export default router;

