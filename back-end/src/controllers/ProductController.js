const StatusCodes = require('../utils/statusCode');
const AbstractController = require('./AbstractController');

class ProductsController extends AbstractController {
  constructor(productService, req, res, next) {
    super(
      productService,
      req,
      res,
      next,
    );
    this.productService = productService;
  }

  async create() {
    const newObj = await this.productService.create(this.req.body);

    return this.res.status(StatusCodes.CREATED).json(newObj);
  }
}

module.exports = ProductsController;
