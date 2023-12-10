import express from "express";

import { singupRouter } from "./routes/register"
import { errorHandler } from "./middleware/error-middleware";

const app = express()
app.use(express.json())

app.use('/api', singupRouter)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`AUTH_SERVICE ON ${PORT}`);
})
