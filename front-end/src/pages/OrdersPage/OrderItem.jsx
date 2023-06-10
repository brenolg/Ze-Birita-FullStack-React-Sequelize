import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function OrderItem({ index, id, date, status, price }) {
  const statusDom = useRef();
  const history = useHistory();

  const formattedIndex = (i) => {
    const four = 4;
    const numeroFormatado = String(i + 1).padStart(four, '0');
    return numeroFormatado;
  };

  const handleStatusColor = ((statusBtn) => {
    const buildColor = () => {
      if (statusBtn === 'Em Trânsito') {
        return 'yellow';
      }
      const statusColor = {
        Preparando: 'orange',
        Transito: 'yellow',
        Pendente: 'red',
        Entregue: 'green',
      };
      const color = statusColor[status];
      return color;
    };

    const color = buildColor();
    statusDom.current.className = `order-container order-status ${color}`;
  });

  const formattedDate = (dateParam) => {
    const newDate = new Date(dateParam);
    const correctDate = newDate.toLocaleDateString('pt-BR');
    return correctDate;
  };

  const handleOrderDetails = () => {
    history.push(`/orders/${Number(id)}`);
  };

  useEffect(() => {
    handleStatusColor(status);
  }, [status]);
  return (

    <button
      className="order-button large-text"
      onClick={ () => handleOrderDetails() }
      value={ id }
      type="button"
    >

      <div className="order-container index-container">
        <span className="index-content">Pedido</span>
        <span className="index-content">{formattedIndex(index)}</span>
      </div>

      <span
        className="order-container order-status"
        ref={ statusDom }
      >
        {status}
      </span>

      <div className="order-container order-number-values">
        <span>{formattedDate(date)}</span>
        <span>{`R$ ${price}`}</span>
      </div>

    </button>

  );
}

OrderItem.propTypes = ({
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
});
