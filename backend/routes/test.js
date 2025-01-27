import express from 'express'
import { post_Question, register_student } from '../controllers/test.js';

const router = express.Router();


router.post('/', post_Question);
router.post('/register', register_student);

export default router; 