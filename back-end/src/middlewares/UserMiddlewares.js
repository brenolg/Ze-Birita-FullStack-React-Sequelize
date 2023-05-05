const HttpException = require('../utils/HttpException');
const { verifyToken } = require('../utils/jwtConfig');
const StatusCodes = require('../utils/statusCode');

class UserHandler {
  static grantAces(req, _res, next) {
    const token = req.header('Authorization');
    
    if (!token) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, 'Token not found');
    }

  try {
    const decoded = verifyToken(token);
    
    req.user = decoded;

    next();
  } catch (error) {
  throw new HttpException(StatusCodes.UNAUTHORIZED, 'Expired or invalid token');
  }
}
}

module.exports = UserHandler;
