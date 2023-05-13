export default class DataHandler {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  get(key) {
    const item = this.storage.getItem(key);

    return item ? JSON.parse(item) : [];
  }

  clear() {
    this.storage.clear();
    return true;
  }
}
