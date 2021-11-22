import { Router } from 'express';
import { SumController } from '../controllers';

const sumRouter = Router();

sumRouter.route('/')
  .get(
    SumController.sum,
  );

export default sumRouter;
