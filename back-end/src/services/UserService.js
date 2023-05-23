const md5 = require('md5');
const AbstractService = require('./AbstractService');
const { User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const { signToken } = require('../utils/jwtConfig');
const schema = require('./validations/validationInputValues');

class UserService extends AbstractService {
  constructor() {
    super(User, 'User');
    this.model = User;
  }

  async getByEmail(email) {
    const result = await this.model.findOne({
      where: { email }, raw: true,
    });

    return result;
  }

  async login(user) {
    const { email, password } = user;
    
    const error = schema.validateLogin(user);
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
    
    const result = await this.getByEmail(email);
    this.notFoundError(result);
    // if (!result) throw new HttpException(statusCode.NOT_FOUND, 'Email not Found');
    if (md5(password) !== result.password) {
      throw new HttpException(statusCode.UNAUTHORIZED, 'Incorrect password');
    }

    const { id, role } = result;
    const token = signToken(email, id, role);
    delete result.password;
    return { token };
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
    const token = signToken(email, role);
    
    return { ...newUser, token };
  }

  async getAllByRole(role) {
    const users = await this.model.findByOne({ where: { role } });
    this.notFoundError(users);
    // if (!users) throw new HttpException(statusCode.NOT_FOUND, `${this.element} Not Found`);
    return users;
  }
}

module.exports = UserService;
