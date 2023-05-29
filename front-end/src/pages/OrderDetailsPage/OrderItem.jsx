import React from 'react';
import PropTypes from 'prop-types';

export default function OrderItem({ index, name, price, quantity }) {
  const totalPrice = price * quantity;

  return (
    <div className="order-itens-container medium-text" key={ index }>

      <span className="order-id">
        {index + 1}
      </span>
      <span className="item-name">{ name }</span>
      <span className="quantity-div">{ quantity}</span>
      <span className="quantity-div">{`R$ ${price.toFixed(2)}`}</span>
      <span className="quantity-div">{`R$ ${totalPrice.toFixed(2)}` }</span>

    </div>

  );
}

OrderItem.propTypes = ({
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
});
