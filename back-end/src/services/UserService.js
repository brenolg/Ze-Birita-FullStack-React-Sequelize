const md5 = require('md5');
const AbstractService = require('./AbstractService');
const { User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const { signToken } = require('../utils/jwtConfig');
const schema = require('./validations/validationInputValues');

const validateUpdate = (data) => {
  const error = schema.validateUpdateUser(data);
  if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
};

class UserService extends AbstractService {
  constructor() {
    super(User, 'User');
    this.user = User;
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

    if (md5(password) !== result.password) {
      throw new HttpException(statusCode.UNAUTHORIZED, 'Incorrect password');
    }

    const { id, role } = result;
    const token = signToken(email, id, role);
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
    const { dataValues } = await this.create({
      email,
      password: md5(password),
      name,
      role,
    });

    const token = signToken(email, dataValues.id, role);
    
    return { ...dataValues, token };
  }

  async getAllByRole(role) {
    const users = await this.user.findAll({ where: { role } });
    delete users.password;

    return users;
  }

  async update(id, data) {
    validateUpdate(data);

    const updates = data;
    const user = await this.getById(id);
    this.notFoundError(user);

    Object.keys(updates).forEach((key) => {
      if (key in user) {
        if (key === 'password') {
          updates[key] = md5(updates[key]);
        }
        user[key] = updates[key];
      }
    });

    await user.save();
  }
}

module.exports = UserService;
