import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { getOrders } from '../../services/APICommunication';
import handleError from '../../services/HandleError';
import OrderItem from './OrderItem';
import { OrdersPageStyle } from './styles';

export default function OrdersPage() {
  const [order, setOrder] = useState([]);
  const { userData, setLogIn } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (userData.token) {
      getOrders(userData.token).then((response) => {
        if (response.error) {
          handleError.defaultError(response, history, setLogIn);
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
