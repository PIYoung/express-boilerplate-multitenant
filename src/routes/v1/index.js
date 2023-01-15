import express from 'express';

import userRouter from './user.route.js';

const router = express.Router();

router.use('/v1', [userRouter]);

export default router;
