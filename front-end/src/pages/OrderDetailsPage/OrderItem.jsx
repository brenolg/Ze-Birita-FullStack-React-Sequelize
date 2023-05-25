import React from 'react';
import PropTypes from 'prop-types';

export default function OrderItem({ index, key, name, price, quantity }) {
  const totalPrice = price * quantity;

  return (
    <div className="order-products-container" key={ key }>

      <span>{index + 1}</span>
      <span>{ name }</span>
      <span>{ quantity}</span>
      <span>{price.toFixed(2)}</span>
      <span>{totalPrice.toFixed(2)}</span>

    </div>

  );
}

OrderItem.propTypes = ({
  key: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
});
