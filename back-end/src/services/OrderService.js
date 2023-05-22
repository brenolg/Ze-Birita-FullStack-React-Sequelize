const { literal } = require('sequelize');
const schema = require('./validations/validationInputValues');

const AbstractService = require('./AbstractService');
const { Sale, Product, SaleProduct, sequelize } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');

class OrderService extends AbstractService {
  constructor() {
    super(Sale, 'Order');
    this.sale = Sale;
    this.saleProduct = SaleProduct;
  }

  async create(sale) {
    const error = schema.validateNewSale(sale);
    if (error.type) throw new HttpException(statusCode.BAD_REQUEST, error.message);
  
    const newSale = await sequelize.transaction(async (t) => {
      const saleCreated = (await this.sale.create({ ...sale }, { transaction: t }))
        .get({ plain: true });
      await Promise.all(sale.shoppingCart.map(({ productId, quantity }) => 
      this.saleProduct.create(
        { saleId: saleCreated.id, productId, quantity }, 
        { transaction: t },
      )));
      const saleById = this.getSaleById(saleCreated.id, t);
      return saleById;
    });
    return newSale;
  }

  async getSaleById(id, t) {
    const sale = await this.sale.findByPk(
      id,
      {
        include: {
          model: Product,
          as: 'products',
          through: { attributes: [] },
          attributes: ['id', 'name', 'price', 'urlImage',
            [literal('`products->SaleProduct`.`quantity`'), 'quantity']],
        },
        transaction: t,
      },
    );
    return sale;
  }
}

module.exports = OrderService;
