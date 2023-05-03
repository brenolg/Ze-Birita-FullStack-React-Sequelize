const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = 'mfnsajk';

module.exports = {
  signToken: (email) => jwt.sign({ data: { email } }, secret, jwtConfig),
};
