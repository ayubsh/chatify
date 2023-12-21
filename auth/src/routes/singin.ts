import express, { NextFunction, Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body } from "express-validator";

import User from '../models/User'
import { validateRequest } from "../middleware/validate-request";

const router = express.Router();

router.post('/singin',[
  body('Username').notEmpty().isLength({min: 4, max:10}).withMessage('Username must be between 4 to 10 characters'),
  body('Password').notEmpty().isLength({min: 4, max: 20}).withMessage('Password must be between 4 to 20 characters')
], validateRequest, async (req: Request, res: Response, next: NextFunction) => {
  const {Username, Password} = req.body;
  try {
    const foundUser = await User.query().findOne({Username})
    if (!foundUser) throw new Error('Invalid Username');
    
    const matchPassword = bcrypt.compareSync(Password, foundUser.Password);
    if (!matchPassword) throw new Error('Invalid Password');

    const token = jwt.sign({id: foundUser.$id}, 'somesecret');
    res.status(200).json({
      token,
      Username
    });

  }catch(error){
    next(error);
  }
})
export {router as singIn}
