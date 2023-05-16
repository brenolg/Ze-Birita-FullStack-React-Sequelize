if (!localStorage.getItem('shopping_cart')) {
  localStorage.setItem('shopping_cart', JSON.stringify([]));
}
const readShoppingCart = () => {
  const shoppingCart = localStorage.getItem('shopping_cart');
  return JSON.parse(shoppingCart);
};

export const saveShoppingCart = (shoppingCart) => localStorage
  .setItem('shopping_cart', JSON.stringify(shoppingCart));

export const getShoppingCart = () => {
  const shoppingCart = readShoppingCart();
  return shoppingCart;
};

export const addProduct = (product) => {
  const shoppingCart = readShoppingCart();
  saveShoppingCart([...shoppingCart, product]);
};

export const removeProduct = (product) => {
  const shoppingCart = readShoppingCart();
  saveShoppingCart(shoppingCart.filter((p) => p.id !== product.id));
};

const remove = async (key) => JSON.parse(localStorage.removeItem(key));

const set = async (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = async (key) => JSON.parse(localStorage.getItem(key));

const clear = async () => localStorage.clear();

const LocalStorage = { clear, get, remove, set };

export default LocalStorage;
