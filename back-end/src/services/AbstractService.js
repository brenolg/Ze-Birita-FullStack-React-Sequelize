const HttpException = require('../utils/HttpException');

class AbstractService {
  constructor(model, element) {
    this.model = model;
    this.element = element;
  }

  async getAll() {
    const all = await this.model.findAll();
    return all;
  }

  async getById(id) {
    const item = await this.model.findByPk(id);
    if (!item) throw new HttpException(404, `${this.element} Not Found`);
    return item;
  }

  async create(obj) {
    const created = await this.model.create(obj);
    delete created.dataValues.password;
    return created;
  }

  async update(id, obj) {
    const [qtdUpdated] = await this.model.update(obj, { where: { id } });
    if (!qtdUpdated) throw new HttpException(404, 'Not Found');
    const updated = await this.getById(+id);
    return updated;
  }

  async remove(id) {
    const removed = await this.model.destroy({ where: { id } });
    if (!removed) throw new HttpException(404, `${this.element} Not Found`);
    return removed;
  }
}

module.exports = AbstractService;
