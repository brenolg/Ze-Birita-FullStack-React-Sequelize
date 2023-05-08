const AbstractService = require('./AbstractService');
const { Product } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const schema = require('../validations/validationInputValues');

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
  
  async getByName(nameSearched) {
    const product = await this.product.findOne({
      where: { name: `${nameSearched}` },
    });

    return product;
  }

  async create(product) {
    const { name, price, urlImage } = product;

    const error = schema.validateNewProduct(product, schema, { convert: true });
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
  
    const hasProduct = await this.getByName(name);
    if (hasProduct !== null) { 
      throw new HttpException(statusCode.CONFLICT, 'Product already registered'); 
    }

    const newProduct = await this.product.create({ name, price, urlImage });
  
    return newProduct;
  }

  async remove(id) {
    const removed = await this.product.destroy({
      where: { id },
    });
    
    if (!removed) throw new HttpException(statusCode.NOT_FOUND, 'Product not found');
    
    return removed;
  }
}

module.exports = UserService;
