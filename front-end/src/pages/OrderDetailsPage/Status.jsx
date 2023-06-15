import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { updateStatus } from '../../services/APICommunication';
import { notify } from '../../services/notifications/notifications';

export default function Status({ status, setStatus, id }) {
  const { userData } = useContext(Context);
  const statusDom = useRef();
  const history = useHistory();

  const transitValue = 'Em Trânsito';
  const buildStatusText = (statusBtn) => {
    if (statusBtn === transitValue) {
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
      if (statusBtn === transitValue) {
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

  const timer = 2500;
  const forbidden = 401;
  const unauthorized = 403;
  const handleError = (response) => {
    notify(response.status);
    if (response.status === forbidden || response.status === unauthorized) {
      setTimeout(() => {
        history.push('/login');
      }, timer);
    }
  };

  const handleStatusBtn = ((statusBtn) => {
    updateStatus(id, { status: statusBtn }, userData.token).then((response) => {
      if (response.error) {
        handleError(response);
      }
      buildStatusText(statusBtn);
      handleStatusColor(statusBtn);
    });
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
            disabled={ status === 'Entregue' }
          >
            Marcar Como Entregue
          </button>

          <button
            className="status-btn medium-text"
            name="Em Trânsito"
            onClick={ (e) => handleStatusBtn(e.target.name) }
            type="button"
            disabled={ status === 'Em Trânsito' }
          >
            Saiu para Entrega
          </button>

          <button
            className="status-btn medium-text"
            name="Preparando"
            onClick={ (e) => handleStatusBtn(e.target.name) }
            type="button"
            disabled={ status === 'Preparando' }
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
