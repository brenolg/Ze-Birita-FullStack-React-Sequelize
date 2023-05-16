import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { ProductCardStyle } from './styles';
import LocalStorage from '../../services/LocalStorageHandler';
import Context from '../../context/Context';

export default function ProductCard({ id, name, price, url, quantity }) {
  const { cartValue, setCartValue } = useContext(Context);
  const [cardQuantity, setCardQuantity] = useState(quantity);

  const writeNewQuantity = (oldCart, newQuantity) => {
    const values = oldCart.map((cartProduct) => {
      if (cartProduct.id === id) {
        return { ...cartProduct, quantity: newQuantity };
      }
      return cartProduct;
    });

    return values;
  };

  const addQuantity = () => {
    const newQuantity = cardQuantity + 1;
    setCardQuantity(newQuantity);

    const newCartValue = Number(cartValue) + Number(price);
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

    const newCartValue = Number(cartValue) - Number(price);
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

  return (
    <ProductCardStyle>

      <div key={ id } className="content card_content">
        <figure>
          <figcaption className="product_detail">
            R$
            { Number(price).toFixed(1)}
          </figcaption>
          <img src={ url } alt={ name } />
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
    </ProductCardStyle>
  );
}

ProductCard.propTypes = ({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,

});
