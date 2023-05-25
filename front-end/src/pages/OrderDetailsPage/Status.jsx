import React, { useEffect, useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';

export default function Status({ status }) {
  const { userData } = useContext(Context);
  const [orderStatus, setOrderStatus] = useState('');
  const adminBtns = useRef();

  const handleUserVisibility = () => {
    adminBtns.current.className = 'status hidden';
    if (userData.role !== 'customer') {
      adminBtns.current.className = 'status visible';
    }
  };

  const buildSatusText = (role) => {
    const setRole = {
      administrator: 'PREPARANDO',
      customer: 'PENDENTE',
      seller: 'ENTREGUE',
    };
    setRoleText(setRole[role]);
  };

  const handleSelectVisibility = () => {
    let displayValue = 'none';

    if (userData.role !== 'customer') {
      displayValue = 'flex';
    }
    return { display: displayValue };
  };

  const hadleStatusColor = () => {
    if (status === 'PREPARANDO') {
      return 'status preparing';
    }
    if (status === 'PENDENTE') {
      return 'status transit';
    }
    if (status === 'ENTREGUE') {
      return 'status delivered';
    }
  };

  useEffect(() => {
    setOrderStatus(status);
    handleUserVisibility();
  }, [adminBtns.current]);

  return (
    <div className="order-products-container">

      <span>{orderStatus}</span>
      <button name="ENTREGUE" type="button">Marcar Como Entregue</button>
      <button ref={ adminBtns } type="button">Saiu para Entrega</button>
      <button name="PREPARANDO" ref={ adminBtns } type="button">Preparar Pedido</button>

    </div>

  );
}

Status.propTypes = ({
  status: PropTypes.string.isRequired,
});
