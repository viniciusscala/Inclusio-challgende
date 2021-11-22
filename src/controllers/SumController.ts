import {
  Request, Response, NextFunction,
} from 'express';
import { StringNumber } from '../helpers';

class SumController {
  sum(req: Request, res: Response, next: NextFunction) {
    try {
      const valueA: string = req.query.a as string;
      const valueB: string = req.query.b as string;

      const partialSum = (a, b, carryIn) => {
        let sum = a + b + carryIn;
        const carryOut = sum > 9 ? 1 : 0;

        sum = carryOut > 0 ? sum - 10 : sum;

        return { sum, carryOut };
      };

      const sum = (a, b) => {
        const biggerLength = a.length > b.length ? a.length : b.length;
        const addendA = new StringNumber(a, biggerLength);
        const addendB = new StringNumber(b, biggerLength);
        let functionReturn = '';
        let carryIn = 0;

        for (let i = 0; i < biggerLength; i += 1) {
          const partialSumReturn = partialSum(
            addendA.getNumberInReversedIndex(i),
            addendB.getNumberInReversedIndex(i),
            carryIn,
          );

          functionReturn = partialSumReturn.sum + functionReturn;
          carryIn = partialSumReturn.carryOut;
        }

        return carryIn > 0 ? carryIn + functionReturn : functionReturn;
      };

      res.locals.data = sum(valueA, valueB);
      res.locals.status = 200;

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new SumController();
