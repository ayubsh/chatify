import { validationResult } from "express-validator"
import { RequestError } from "../error/request-error";
import { NextFunction, Request, Response } from "express";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) throw new RequestError(errors.array());
  next();
}
