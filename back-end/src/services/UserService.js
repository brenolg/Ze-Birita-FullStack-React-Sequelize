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
      where: { email }, attributes: { exclude: ['password'] }, raw: true,
    });

    return result;
  }

  async login(user) {
    const { email, password } = user;
    const result = await this.getByEmail(email);
    if (!result) throw new HttpException(statusCode.NOT_FOUND, 'Email not Found');
    if (!md5(password) === result.password) { 
      throw new HttpException(statusCode.UNAUTHORIZED, 'Invalid email or password');
    }
    const token = signToken(email);

    return { ...result, token };
  }

  async register(user) {
    const { email, password, name } = user;
    const validateUser = await this.getByEmail(email);
    if (validateUser) {
      throw new HttpException(statusCode.UNAUTHORIZED, 'Usuário ja registrado');
    }
    const newUser = await this.create({
      email,
      password: md5(password),
      name,
    });
    
    return newUser;
  }
}

module.exports = UserService;
