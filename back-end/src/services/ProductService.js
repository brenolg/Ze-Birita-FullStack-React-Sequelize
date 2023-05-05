const AbstractService = require('./AbstractService');
const { Product } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');

class UserService extends AbstractService {
  constructor() {
    super(Product);
    this.product = Product;
  }

  async getById(id) {
    const product = await this.product.findByPk(id);

    if (!product) throw new HttpException(statusCode.NOT_FOUND, 'Product not found');

    return product;
  }

  async getByAll() {
    const allProducts = await this.product.findAll();
    return allProducts;
  }
}

module.exports = UserService;
