const StatusCodes = require('../utils/statusCode');
const AbstractController = require('./AbstractController');

class UserController extends AbstractController {
  constructor(userService, req, res, next) {
    super(
      userService,
      req,
      res,
      next,
    );
    this.userService = userService;
  }

  async login() {
      const newObj = await this.userService.login(this.req.body);
      return this.res.status(StatusCodes.OK).json(newObj);
  }

  async register() {
      const newObj = await this.userService.register(this.req.body);
      return this.res.status(StatusCodes.CREATED).json(newObj);
  }

  async getByRole() {
      const { role } = this.req.body;
      const result = await this.service.getByRole(role);
      return this.res.status(StatusCodes.OK).json(result);
  }
}

module.exports = UserController;
