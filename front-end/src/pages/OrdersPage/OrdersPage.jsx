import React, { useEffect, useState } from 'react';

import { OrdersStyle } from './styles';

export default function OrdersPage() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // getOrder(idUrl).then((response) => {
    //   setOrder(response);
    //   console.log(response);
    // });
  }, []);

  return (

    <OrdersStyle>
      <div>{order}</div>
      <main>Order</main>
    </OrdersStyle>
  );
}
