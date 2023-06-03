const { Op } = require('sequelize');
const AbstractService = require('./AbstractService');
const { Product } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const schema = require('./validations/validationInputValues');

class ProductService extends AbstractService {
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

  async searchAll(categorySearched, nameSearched) {
    let nameQuery = { [Op.like]: `%${nameSearched}%` };
    if (nameSearched.length === 1) nameQuery = { [Op.startsWith]: `${nameSearched}` };
    if (categorySearched === 'all') return this.searchByName(nameSearched);

    const products = await this.product.findAll({
      where: {
        category: `${categorySearched}`,
        name: { ...nameQuery }, 
      },
    });
  
    return products;
  }

  async searchByCategory(categorySearched) {
    const products = await this.product.findAll({
      where: {
        category: `${categorySearched}`,
      },
    });
  
    return products;
  }

  async searchByName(nameSearched) {
    let nameQuery = { [Op.like]: `%${nameSearched}%` };
    if (nameSearched.length === 1) nameQuery = { [Op.startsWith]: `${nameSearched}` };
    
    const products = await this.product.findAll({
      where: {
        name: { ...nameQuery }, 
      },
    });
  
    return products;
  }

  async searchByNameFirstLetter(name) {
      const products = await this.product.findAll({
        where: {
          name: {
            [Op.startsWith]: `${name}`,
          },
        },
      });
      return products;
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

module.exports = ProductService;
