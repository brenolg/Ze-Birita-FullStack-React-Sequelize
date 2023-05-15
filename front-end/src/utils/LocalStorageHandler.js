const remove = async (key) => JSON.parse(localStorage.removeItem(key));

const set = async (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = async (key) => JSON.parse(localStorage.getItem(key));

const clear = async () => localStorage.clear();

const LocalStorage = { clear, get, remove, set };

export default LocalStorage;
