import express, {NextFunction, Request, Response} from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { body, Result, ValidationError, validationResult } from "express-validator"
import { validateRequest } from '../middleware/validate-request';

const router = express.Router();
import User from '../models/User';

router.post('/register', [
  body('Email').isEmail().withMessage('Email must be valid'),
  body('Username').trim().isLength({min: 4, max: 10}).withMessage('username must be between 4 and 10 characters'),
  body('Password').trim().isLength({min: 4,  max: 20}).withMessage('password must be between 4 and 20 characters')
], validateRequest, async (req: Request, res: Response, next: NextFunction) => {

    const {Username, Email, Password} = req.body;
    try {
      const foundUser = await User.query().findOne({
        Username,
      })

      if(foundUser) throw new Error('User already exist');

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(Password, salt)

      const newUser = {
        Username,
        Email,
        Password: hash
      }
      const insertedUser = await User.query().insert(newUser);
      const token = jwt.sign({id: insertedUser.$id}, 'somesecret')
      res.status(201).json(token);
    } catch (error) {
      next(error)
    } 
  })

export {router as singup}
