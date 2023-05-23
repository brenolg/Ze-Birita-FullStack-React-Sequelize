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
    if (!item) throw new HttpException(statusCode.NOT_FOUND, `${this.element} Not Found`);
  }

  async getById(id) {
    const item = await this.model.findByPk(id);
    this.notFoundError(item);
    // if (!item) throw new HttpException(statusCode.NOT_FOUND, `${this.element} Not Found`);
    return item;
  }

  async create(obj) {
    const created = await this.model.create(obj);
    delete created.dataValues.password;
    return created;
  }

  async update(id, obj) {
    const [qtdUpdated] = await this.model.update(obj, { where: { id } });
    this.notFoundError(qtdUpdated);
    // if (!qtdUpdated) throw new HttpException(statusCode.NOT_FOUND, 'Not Found');
    const updated = await this.getById(+id); // +??
    return updated;
  }

  async remove(id) {
    const removed = await this.model.destroy({ where: { id } });
    this.notFoundError(removed);
    // if (!removed) throw new HttpException(statusCode.NOT_FOUND, `${this.element} Not Found`);
    return removed;
  }
}

module.exports = AbstractService;
