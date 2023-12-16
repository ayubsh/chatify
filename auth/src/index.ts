import express from "express";
import Knex from 'knex';
import { Model } from "objection";


import  config  from "../knexfile";
import { errorHandler } from "./middleware/error-middleware";
import { singup } from "./routes/register"
import { singIn } from "./routes/singin";
import { singout } from "./routes/singout";

const knex = Knex(config.development)
Model.knex(knex);

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
  res.send("hellow world")
})
app.use('/api', singup);
app.use('/api', singIn);
app.use('/api', singout);
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`AUTH_SERVICE ON ${PORT}`);
})
