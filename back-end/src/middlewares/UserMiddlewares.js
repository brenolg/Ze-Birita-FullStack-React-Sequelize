const HttpException = require('../utils/HttpException');
const { verifyToken } = require('../utils/jwtConfig');
const StatusCodes = require('../utils/statusCode');

class UserHandler {
  static defaultAccess(req, _res, next) {
    const token = req.header('Authorization');
    
    if (!token) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, 'Token not found');
    }

  try {
    const decoded = verifyToken(token);
    
    req.body.user = decoded.data.email; 
    req.body.role = decoded.data.role;

    next();
  } catch (error) {
  throw new HttpException(StatusCodes.FORBIDDEN, 'Expired or invalid token');
  }
}

static roleAccess(RouteRole) {
  return (req, _res, next) => {
    const { role } = req.body;
    if (!req.body.role) throw new HttpException(StatusCodes.UNAUTHORIZED, 'Invalid Authorization ');
  
    const hasAccess = RouteRole === role;

    if (!hasAccess) throw new HttpException(StatusCodes.UNAUTHORIZED, 'Invalid Authorization');
    next();
  };
}
}

module.exports = UserHandler;
