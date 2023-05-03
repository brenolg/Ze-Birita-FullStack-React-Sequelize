const AbstractController = require('./AbstractController');

class UserController extends AbstractController {
  constructor(loginService, req, res, next) {
    super(
      loginService,
      req,
      res,
      next,
    );
    this.loginService = loginService;
  }

  async login() {
    try {
      const newObj = await this.loginService.login(this.req.body);
      return this.res.status(200).json(newObj);
    } catch (error) {
      this.next(error);
    }
  }
}

module.exports = UserController;