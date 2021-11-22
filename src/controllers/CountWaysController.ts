import {
  Request, Response, NextFunction,
} from 'express';

class CountWaysController {
  countWays(req: Request, res: Response, next: NextFunction) {
    try {
      const steps = req.query.steps as string;
      const knownValues = {
        1: 1,
        2: 2,
      };

      const countWaysRecursion = (n: number) => {
        if (n < 1) {
          return 0;
        } if (knownValues[n]) {
          return knownValues[n];
        }
        knownValues[n] = countWaysRecursion(n - 1) + countWaysRecursion(n - 2);
        return knownValues[n];
      };

      res.locals.data = countWaysRecursion(parseInt(steps, 10));
      res.locals.status = 200;

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new CountWaysController();
