const remove = (key) => localStorage.removeItem(key);

const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = (key) => JSON.parse(localStorage.getItem(key));

const clear = () => localStorage.clear();

const LocalStorage = { clear, get, remove, set };

export default LocalStorage;
