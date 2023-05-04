const md5 = require('md5');
const AbstractService = require('./AbstractService');
const { User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const { signToken } = require('../utils/jwtConfig');
const schema = require('../validations/validationInputValues');

class UserService extends AbstractService {
  constructor() {
    super(User);
    this.user = User;
  }

  async getByEmail(email) {
    const result = await this.user.findOne({
      where: { email }, raw: true,
    });

    return result;
  }

  async login(user) {
    const { email, password } = user;
    
    const error = await schema.validateLogin(user);
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
    
    const result = await this.getByEmail(email);
    if (!result) throw new HttpException(statusCode.NOT_FOUND, 'Email not Found');
    if (md5(password) !== result.password) {
      throw new HttpException(statusCode.UNAUTHORIZED, 'Password incorreto');
    }
    const token = signToken(email);
    delete result.password;
    return { ...result, token };
  }

  async register(user) {
    const { email, password, name } = user;

    const error = await schema.validateNewUser(user);
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
    
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