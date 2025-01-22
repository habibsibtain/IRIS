import express, {Router} from 'express'
import { question } from '../controllers/index.js';

const router = Router();

router.route('/',).post(question)


export default router;