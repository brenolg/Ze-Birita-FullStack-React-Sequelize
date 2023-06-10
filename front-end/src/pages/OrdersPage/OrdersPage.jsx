import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import OrderItem from './OrderItem';
import { getOrders } from '../../services/APICommunication';
import Context from '../../context/Context';
import { OrdersPageStyle } from './styles';
import { notify } from '../../services/notifications/notifications';

export default function OrdersPage() {
  const [order, setOrder] = useState([]);
  const { userData } = useContext(Context);
  const history = useHistory();

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

  useEffect(() => {
    if (userData.token) {
      getOrders(userData.token).then((response) => {
        if (response.error) {
          handleError(response);
          return;
        }
        setOrder(response.data);
      });
    }
  }, [userData.token]);

  return (
    <OrdersPageStyle>
      <section className="orders-section">

        {order.length && order.map((o, index) => (
          <OrderItem
            index={ index }
            key={ o.id }
            id={ o.id }
            date={ o.saleDate }
            status={ o.status }
            price={ o.totalPrice }
          />
        ))}
      </section>
    </OrdersPageStyle>
  );
}
