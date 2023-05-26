import React, { useEffect, useCallback, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';

export default function Status({ status, setStatus }) {
  const { userData } = useContext(Context);
  const statusDom = useRef();

  const buildStatusText = (statusBtn) => {
    const statusList = {
      preparando: 'Preparando',
      transito: 'Em Trânsito',
      entregue: 'Entregue',
    };
    console.log(statusDom.current.className);
    setStatus(statusList[statusBtn]);
  };

  const handleStatusColor = useCallback(() => {
    const buildColor = () => {
      if (status === 'Em Trânsito') return 'orange';
      const statusColor = {
        Preparando: 'orange',
        Pendente: 'yellow',
        Entregue: 'green',
      };
      const color = statusColor[status];
      return color;
    };

    const color = buildColor();
    statusDom.current.className = `order-status ${color}`;
  }, [status]);

  useEffect(() => {
    handleStatusColor();
  }, [status, handleStatusColor]);

  return (
    <div className="order-products-container">

      <span
        ref={ statusDom }
        className="order-status"
        onLoad={ handleStatusColor }
      >
        {status }

      </span>
      <button
        onClick={ () => buildStatusText('entregue') }
        type="button"
      >
        Marcar Como Entregue

      </button>
      {userData.role !== 'customer' && (
        <>
          <button
            onClick={ () => buildStatusText('transito') }
            type="button"
          >
            Saiu para Entrega
          </button>

          <button
            onClick={ () => buildStatusText('preparando') }
            type="button"
          >
            Preparar Pedido
          </button>
        </>
      )}

    </div>

  );
}

Status.propTypes = ({
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
});
