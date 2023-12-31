const HttpException = require('../utils/HttpException');
const statusCode = require('../utils/statusCode');

class AbstractService {
  constructor(model, element) {
    this.model = model;
    this.element = element;
  }

  async getAll() {
    const all = await this.model.findAll();
    return all;
  }

  notFoundError(item) {
    if (!item) throw new HttpException(statusCode.NOT_FOUND, `${this.element} not found`);
  }

  async getById(id) {
    const item = await this.model.findByPk(id);
    this.notFoundError(item);
    return item;
  }

  async create(obj) {
    const created = await this.model.create(obj);
    delete created.dataValues.password;
    return created;
  }

  async remove(id) {
    const removed = await this.model.destroy({ where: { id } });
    this.notFoundError(removed);
    return removed;
  }
}

module.exports = AbstractService;
