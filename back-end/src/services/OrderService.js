const { literal } = require('sequelize');
const schema = require('./validations/validationInputValues');

const AbstractService = require('./AbstractService');
const { Sale, Product, SaleProduct, sequelize, User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');
const Roles = require('../utils/rolesList');
const orderStatus = require('../utils/orderStatus');

class OrderService extends AbstractService {
  constructor() {
    super(Sale, 'Sale');
    this.sale = Sale;
    this.saleProduct = SaleProduct;
    this.user = User;
    this.includeProduct = {
          model: Product,
          as: 'products',
          through: { attributes: [] },
          attributes: ['id', 'name', 'price', 'urlImage',
            [literal('`products->SaleProduct`.`quantity`'), 'quantity']],
    };
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
      const { dataValues } = await this.getById(saleCreated.id);
      return dataValues;
    });
    return newSale;
  }

  async getById(id) {
    const { dataValues } = await this.sale.findByPk(
      id,
      {
        include: this.includeProduct,
      },
    );
    const user = await this.user.findByPk(dataValues.sellerId, { raw: true });
    return { ...dataValues, sellerName: user.name };
  }

  static notFoundRoleError(user, role) {
    if (!user || user.role !== role) { 
      throw new HttpException(statusCode.NOT_FOUND, `${role} not found`);
    }
  }

  async getAllByCustomer(id) {
    const userExists = await this.user.findByPk(id, { raw: true });
    OrderService.notFoundRoleError(userExists, Roles.CUSTOMER);
    const orders = await this.sale.findAll({
      where: { userId: id },
      include: this.includeProduct,
      });
    return orders;
  }

  async getAllBySeller(id) {
    const userExists = await this.user.findByPk(id, { raw: true });
    OrderService.notFoundRoleError(userExists, Roles.SELLER);
    const orders = await this.sale.findAll({
      where: { sellerId: id },
      include: this.includeProduct,
      });
    return orders;
  }

  async updateStatus(id, status) {
    const sale = await this.sale.findByPk(id);
    this.notFoundError(sale);

    if (sale.status === orderStatus.FINALIZADA) {
      throw new HttpException(statusCode.UNPROCESSABLE, 'Sale already delivered');
    }
    if (!Object.values(orderStatus).includes(status)) {
      throw new HttpException(
        statusCode.BAD_REQUEST, 
       `Invalid status, status should be ${orderStatus.EM_TRÂNSITO}, 
       ${orderStatus.PREPARANDO} 
       or ${orderStatus.FINALIZADA}`,
      );
    }
    await this.sale.update({ status }, { where: { id } });
  }
}

module.exports = OrderService;
