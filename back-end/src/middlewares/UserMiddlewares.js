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
    
    req.body.user = { email: decoded.data.email, id: decoded.data.id }; 
    req.body.role = decoded.data.role;

    next();
  } catch (error) {
  throw new HttpException(StatusCodes.FORBIDDEN, 'Expired or invalid token');
  }
}

static roleAccess(...RouteRoles) {
  return (req, _res, next) => {
    const { role } = req.body;
    
    if (!req.body.role) throw new HttpException(StatusCodes.FORBIDDEN, 'Invalid Authorization ');

    const rolesList = [...RouteRoles];
    
    const hasAccess = rolesList.includes(role);

    if (!hasAccess) throw new HttpException(StatusCodes.FORBIDDEN, 'Invalid Authorization');
    next();
  };
}
}

module.exports = UserHandler;
