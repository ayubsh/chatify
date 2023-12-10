import express, {NextFunction, Request, Response} from 'express';
import { body, Result, ValidationError, validationResult } from "express-validator"
import { validateRequest } from '../middleware/validate-request';
const router = express.Router();


router.post('/register', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('username').trim().isLength({min: 4, max: 10}).withMessage('username must be between 4 and 10 characters'),
  body('password').trim().isLength({min: 4,  max: 20}).withMessage('password must be between 4 and 20 characters')
], validateRequest,(req: Request, res: Response, next: NextFunction) => {
    const {username, email, password} = req.body;

    console.log(username, email, password);

    res.send({});
  })

export {router as singupRouter}
