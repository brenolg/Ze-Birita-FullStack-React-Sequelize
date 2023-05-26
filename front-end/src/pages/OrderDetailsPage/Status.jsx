import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Context from '../../context/Context';
import { updateStatus } from '../../services/APICommunication';

export default function Status({ status, setStatus }) {
  const { userData } = useContext(Context);
  const statusDom = useRef();
  const location = useLocation();

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
        return 'orange';
      }
      const statusColor = {
        Preparando: 'orange',
        Transito: 'orange',
        Pendente: 'yellow',
        Entregue: 'green',
      };
      const color = statusColor[status];
      return color;
    };

    const color = buildColor();
    statusDom.current.className = `order-status ${color}`;
  });

  const handleStatusBtn = ((statusBtn) => {
    const pathName = location.pathname.split('/');
    const idUrl = pathName[2];

    buildStatusText(statusBtn);
    handleStatusColor(statusBtn);
    updateStatus(idUrl, { status: statusBtn });
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
            name="Entregue"
            onClick={ (e) => handleStatusBtn(e.target.name) }
            type="button"
          >
            Marcar Como Entregue
          </button>

          <button
            name="Em Trânsito"
            onClick={ (e) => handleStatusBtn(e.target.name) }
            type="button"
          >
            Saiu para Entrega
          </button>

          <button
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
});
