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
// Posso deletar ligia ?

const remove = (key) => localStorage.removeItem(key);

const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = (key) => JSON.parse(localStorage.getItem(key));

const clear = () => localStorage.clear();

const LocalStorage = { clear, get, remove, set };

export default LocalStorage;
