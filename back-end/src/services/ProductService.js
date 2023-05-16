const AbstractService = require('./AbstractService');
const { Product } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const schema = require('../validations/validationInputValues');

class UserService extends AbstractService {
  constructor() {
    super(Product, 'Product');
    this.product = Product;
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
}

module.exports = UserService;
