import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import LocalStorage from '../../services/LocalStorageHandler';
import Context from '../../context/Context';

export default function ProductCard({ id, name, price, url }) {
  const {
    cartValue,
    setCartValue,
    totalPriceArray,
  } = useContext(Context);

  const [cardQuantity, setCardQuantity] = useState(0);

  const writeNewQuantity = (oldCart, newQuantity) => {
    const values = oldCart.map((cartProduct) => {
      if (cartProduct.id === id) {
        return { ...cartProduct, quantity: newQuantity };
      }
      return cartProduct;
    });

    return values;
  }; // Escreve a nova quantidades dos produtos

  useEffect(() => {
    const oldCart = LocalStorage.get('shopping_cart') || [];

    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === id,
    );

    if (findProduct) {
      setCardQuantity(findProduct.quantity);
      if (cartValue === 0) {
        const itemTotal = findProduct.price * findProduct.quantity;
        totalPriceArray.push(itemTotal);

        const totalValue = totalPriceArray.reduce((acc, curr) => acc + curr, 0);

        setCartValue(totalValue);
      }
    }
  }, [id, totalPriceArray, setCartValue, cartValue]);
  // Retorna os valores do localStorage e seta o valor do cartValue e cardQuantity

  const addQuantity = () => {
    const newQuantity = cardQuantity + 1;
    setCardQuantity(newQuantity);

    const newCartValue = cartValue + price;
    setCartValue(newCartValue);

    const oldCart = LocalStorage.get('shopping_cart') || [];

    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === id,
    );

    if (findProduct) {
      const values = writeNewQuantity(oldCart, newQuantity);
      LocalStorage.set('shopping_cart', values);
    }

    if (!findProduct) {
      const values = [...oldCart, { id, name, price, quantity: newQuantity }];
      LocalStorage.set('shopping_cart', values);
    }
  };

  const removeQuantity = () => {
    if (cardQuantity === 0) return 0;

    const newQuantity = cardQuantity - 1;
    setCardQuantity(newQuantity);

    const newCartValue = cartValue - price;
    setCartValue(newCartValue);

    const oldCart = LocalStorage.get('shopping_cart') || [];

    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === id,
    );

    if (findProduct) {
      const values = writeNewQuantity(oldCart, newQuantity);
      LocalStorage.set('shopping_cart', values);
    }

    if (!findProduct) {
      const values = [...oldCart, { id, name, price, quantity: newQuantity }];
      LocalStorage.set('shopping_cart', values);
    }
  };

  useEffect(() => {
    const oldCart = LocalStorage.get('shopping_cart') || [];
    const updatedValues = oldCart.filter((cartProduct) => cartProduct.quantity !== 0);
    LocalStorage.set('shopping_cart', updatedValues);
  }, [cardQuantity, id]);
  // Retorna localstorage sem quantity 0

  return (

    <div key={ id } className="card_content">
      <figure>
        <figcaption className="product_detail">
          R$
          { price.toFixed(2)}
        </figcaption>

        <img className="product_img" src={ url } alt={ name } />
      </figure>

      <div className="counter_container">
        <p className="product_name">{ name }</p>

        <div className="counter">
          <button
            className="button_counter decrease"
            type="button"
            name="decrease"
            onClick={ removeQuantity }
          >
            -
          </button>
          <span className="quantity">{cardQuantity}</span>
          <button
            className="button_counter increase"
            type="button"
            name="increase"
            onClick={ addQuantity }
          >
            +
          </button>
        </div>
      </div>
    </div>

  );
}

ProductCard.propTypes = ({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
});
