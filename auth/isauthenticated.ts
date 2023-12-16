import jwt from 'jsonwebtoken';

module.exports = async function isAuthenticated(req, res, next) {
  const token = req.header('jwt_token');

  if (!token) throw new Error("unathotized");

  try {
    const verify = jwt.verify(token, 'somesecret');
    req.user = verify.user
  } catch (error) {
    next(error)
  }
}
