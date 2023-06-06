import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import { updateStatus } from '../../services/APICommunication';

export default function Status({ status, setStatus, id }) {
  const { userData } = useContext(Context);
  const statusDom = useRef();

  const buildStatusText = (statusBtn) => {
    if (statusBtn === 'Em Trânsito') {
      return setStatus(statusBtn);
    }

    const statusList = {
      Preparando: 'Preparando',
      Entregue: 'Entregue',
    };

    setStatus(statusList[statusBtn]);
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
    statusDom.current.className = `order-status ${color}`;
  });

  const handleStatusBtn = ((statusBtn) => {
    buildStatusText(statusBtn);
    handleStatusColor(statusBtn);
    updateStatus(id, { status: statusBtn }, userData.token);
  });

  useEffect(() => {
    handleStatusColor(status);
  });

  return (
    <div className="order-products-container">

      <span
        ref={ statusDom }
        className="order-status"
        onLoad={ handleStatusColor }
      >
        {status }

      </span>
      {userData.role !== 'customer' && (
        <>
          <button
            className="status-btn medium-text"
            name="Entregue"
            onClick={ (e) => handleStatusBtn(e.target.name) }
            type="button"
          >
            Marcar Como Entregue
          </button>

          <button
            className="status-btn medium-text"
            name="Em Trânsito"
            onClick={ (e) => handleStatusBtn(e.target.name) }
            type="button"
          >
            Saiu para Entrega
          </button>

          <button
            className="status-btn medium-text"
            name="Preparando"
            onClick={ (e) => handleStatusBtn(e.target.name) }
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
  id: PropTypes.string.isRequired,
});
