import React, { useEffect, useState, useContext } from 'react';
import OrderItem from './OrderItem';
import { getOrders } from '../../services/APICommunication';
import Context from '../../context/Context';

import { OrdersPageStyle } from './styles';

export default function OrdersPage() {
  const [order, setOrder] = useState([]);
  const { userData } = useContext(Context);

  useEffect(() => {
    getOrders(userData.token).then((response) => {
      setOrder(response);
    });
  }, []);

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
