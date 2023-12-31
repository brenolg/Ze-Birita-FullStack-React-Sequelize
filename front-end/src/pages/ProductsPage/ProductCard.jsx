import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';

export default function ProductCard({ id, name, price, url, priceArray }) {
  const {
    cartValue,
    setCartValue,
  } = useContext(Context);

  const [cardQuantity, setCardQuantity] = useState(0);
  const history = useHistory();

  const handleImagePng = (event) => {
    const imageSrc = event.target.src;
    const hasPngExtension = imageSrc.endsWith('.png');
    const padding = hasPngExtension ? '1rem' : '0';
    return {
      paddingTop: padding,
    };
  };

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
    }
  }, [id, priceArray, setCartValue, cartValue]);
  // Retorna os valores do localStorage e seta cardQuantity

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

    <div key={ id } className="card_content animate-shadow">
      <button
        className="product-details-btn"
        onClick={ () => history.push(`/products/${Number(id)}`) }
        type="button"
      >
        <figure className="figure-product">
          <figcaption className="product-price">
            {`R$ ${price.toFixed(2)}` }
          </figcaption>

          <img
            className="product_img"
            src={ url }
            alt={ name }
            style={ handleImagePng({ target: { src: url } }) }
          />
        </figure>
      </button>

      <div className="counter_container">
        <p className="product_name large-text">{ name }</p>

        <div className="counter">
          <button
            className="button_counter decrease"
            type="button"
            name="decrease"
            onClick={ removeQuantity }
          >
            -
          </button>
          <span className="quantity large-text">{cardQuantity}</span>
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
  priceArray: PropTypes.arrayOf(PropTypes.number).isRequired,
});
