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

  async searchAll() {
    const { name, category } = this.req.query;
    let products = [];

    if (!name) products = await this.productService.searchByCategory(category);

    products = await this.productService.searchAll(category, name);

    if (products.length === 0) {
      return this.res
      .status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' }); 
    }
    
    this.res.status(StatusCodes.OK).json(products);
  }

  async getByCategory() {
    const { category } = this.req.query;

    const products = await this.productService.searchByCategory(category); 
    
    if (products.length === 0) {
      return this.res
      .status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' }); 
    }

    this.res.status(StatusCodes.OK).json(products);
  }
}

module.exports = ProductsController;
