import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function OrderItem({ index, id, date, status, price }) {
  const formattedIndex = (i) => {
    const four = 4;
    const numeroFormatado = String(i).padStart(four, '0');
    return numeroFormatado;
  };

  const formattedDate = (date) => {
    const newDate = new Date(date);
    const correctDate = data.toLocaleDateString('pt-BR');
    return correctDate;
  };

  useEffect(() => {
    console.log();
  }, []);
  return (

    <button type="button" id={ id } className="order-button large-text">

      <div className="order-container index-container">
        <span className="index-content">Pedido</span>
        <span className="index-content">{formattedIndex(index)}</span>
      </div>

      <span className="order-container order-status">
        {status}
      </span>

      <div className="order-container order-number-values">
        <span>{date}</span>
        <span>{`R$ ${price}`}</span>
      </div>

    </button>

  );
}

OrderItem.propTypes = ({
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
});
