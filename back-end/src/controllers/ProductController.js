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
    const urlImage = `http://localhost:3001/images/${this.req.file.filename}`;
    const { name, price } = this.req.body;
    const newObj = await this.productService.create({ name, price, urlImage });

    return this.res.status(StatusCodes.CREATED).json(newObj);
  }
}

module.exports = ProductsController;
