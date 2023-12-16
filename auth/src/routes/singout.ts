import express from 'express';

const router = express.Router();


router.get('/singout', (req, res, next) => {
  res.send(
    'since we are using toke which is stateless and stored in the web-browser the singout should be handle by the client site, just remove it from browser'
  )
})

export { router as singout}
