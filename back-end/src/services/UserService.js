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
    
    const error = schema.validateLogin(user);
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
    
    const result = await this.getByEmail(email);
    if (!result) throw new HttpException(statusCode.NOT_FOUND, 'Email not Found');
    if (md5(password) !== result.password) {
      throw new HttpException(statusCode.UNAUTHORIZED, 'Incorrect password');
    }

    const { role } = result;
    
    const token = signToken(email, role);
    delete result.password;
    return { ...result, token };
  }

  async register(user) {
    const { email, password, name, role } = user;

    const error = schema.validateNewUser(user);
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
    
    const validateUser = await this.getByEmail(email);
    if (validateUser) {
      throw new HttpException(statusCode.CONFLICT, 'User already registered');
    }

    const newUser = await this.create({
      email,
      password: md5(password),
      name,
      role,
    });
    
    return newUser;
  }
}

module.exports = UserService;
