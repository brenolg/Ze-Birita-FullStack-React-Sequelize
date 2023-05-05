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

  async getById() {
    const { id } = this.req.params;
    
    const newObj = await this.productService.getById(id);
    return this.res.status(StatusCodes.OK).json(newObj);
  }

  async getAll() {
    const newObj = await this.productService.getAll();
    return this.res.status(StatusCodes.OK).json(newObj);
  }

  async remove() {
    const { id } = this.req.params;

    await this.productService.remove(id);
    return this.res.status(StatusCodes.OK).json();
  }
}

module.exports = ProductsController;
