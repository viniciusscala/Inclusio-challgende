import { Router } from 'express';
import { CountWaysController } from '../controllers';

const countWaysRouter = Router();

countWaysRouter.route('/')
  .get(
    CountWaysController.countWays,
  );

export default countWaysRouter;
