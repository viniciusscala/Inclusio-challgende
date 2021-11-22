import { Router } from 'express';

import CountWaysRouter from './CountWaysRoutes';
import SumRouter from './SumRoutes';

const router = Router();

router.use('/sum', SumRouter);
router.use('/count-ways', CountWaysRouter);

router.route('/').get((req, res) => {
  res.send('incluio challenge by Scala');
});

export default router;
