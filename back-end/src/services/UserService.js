const md5 = require('md5');
const AbstractService = require('./AbstractService');
const { User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const { signToken } = require('../utils/jwtConfig');

class UserService extends AbstractService {
  constructor() {
    super(User);
    this.user = User;
  }

  async getByEmail(email) {
    const result = await this.user.findOne({
      where: { email },
    });
    return result;
  }

  async login(user) {
    const { email, password } = user;
    const result = await this.getByEmail(email);
    if (!result) throw new HttpException(statusCode.NOT_FOUND, 'Not Found');
    if (!md5(password) === result.password) { 
      throw new HttpException(statusCode.UNAUTHORIZED, 'Invalid email or password');
    }
    // to-do: gerar token e enviar no retorno
    const token = signToken(email);
    return token;
  }
}

module.exports = UserService;