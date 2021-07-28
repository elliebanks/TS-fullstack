import * as express from 'express';
import chirpsRouter from './chirps';
import db from '../db';

const router = express.Router();

router.use('/chirps', chirpsRouter);


export default router;