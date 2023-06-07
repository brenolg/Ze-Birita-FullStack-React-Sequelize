/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import LocalStorage from '../../services/LocalStorageHandler';
import Context from '../../context/Context';

export default function SaleItem({ id, name, price, quantity, index, list,
  setList }) {
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
  }; // Escreve a nova quantidades dos produtos

  useEffect(() => {
    const oldCart = LocalStorage.get('shopping_cart') || [];
    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === id,
    );

    if (findProduct) {
      setCardQuantity(findProduct.quantity);
    }
  }, [id]);
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

  const handleDelete = () => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);

    let totalValue = 0;
    newList.forEach((product) => {
      totalValue += product.price * product.quantity;
    });

    setCartValue(totalValue);
    LocalStorage.set('shopping_cart', newList);
  };

  const totalByItem = () => {
    const total = price * cardQuantity;
    return total.toFixed(2);
  };

  return (

    <div key={ id } className="cart_content medium-text">
      <div className="index-div">
        <span className="index-span">{index + 1}</span>
      </div>

      <span className="product_name">{ name }</span>

      <div className="price-div">
        <span className="product_price price-item">
          {`R$ ${price}`}
        </span>

        <span className="product_total_price price-item">
          {`R$ ${totalByItem()}`}
        </span>

        <div className="counter_container price-item">

          <div className="counter ">
            <button
              className="button_counter decrease medium-text"
              type="button"
              name="decrease"
              onClick={ removeQuantity }
            >
              -
            </button>

            <div className="quantity">
              <div className="medium-text">
                {cardQuantity}
              </div>
            </div>

            <button
              className="button_counter increase medium-text"
              type="button"
              name="increase"
              onClick={ addQuantity }
            >
              +
            </button>
          </div>
        </div>

      </div>

      <button
        className="rmv_button large-text"
        id={ id }
        type="button"
        onClick={ handleDelete }
      >
        Remover

      </button>
    </div>

  );
}

SaleItem.propTypes = ({
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  setList: PropTypes.func.isRequired,
});
