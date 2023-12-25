import express from "express";
const router = express.Router();

import User from '../models/User'
//returns all users
router.get("/users", async (req, res, next) => {
  try {
    const users = await User.query();

    res.status(200).json(users);
    
  } catch (error) {
    next(error);
  }
});

//find user by id
router.get('/users/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const user = await User.query().findById(id);
    res.status(200).json(user)
  } catch (error) {
    next(error);
  }
})

export { router as userRouter };
