const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = 'my-secret-jwt-ng';

module.exports = {
  signToken: (email) => jwt.sign({ data: { email } }, secret, jwtConfig),
  verifyToken: (token) => jwt.verify(token, secret),
};
