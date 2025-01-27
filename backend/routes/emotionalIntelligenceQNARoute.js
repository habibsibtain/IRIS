import express from 'express';
import { post_Question } from '../controllers/test.js';

const router = express.Router();


router.post('/', post_Question);

export default router;