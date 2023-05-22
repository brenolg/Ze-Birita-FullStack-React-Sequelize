// const StatusCodes = require('../utils/statusCode');
const AbstractController = require('./AbstractController');

class OrderControler extends AbstractController {
  constructor(productService, req, res, next) {
    super(
      productService,
      req,
      res,
      next,
    );
    this.productService = productService;
  }
}

module.exports = OrderControler;
