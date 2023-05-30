import React, { useEffect, useState } from 'react';
import OrderItem from './OrderItem';

import { OrdersPageStyle } from './styles';

export default function OrdersPage() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // getOrder(idUrl).then((response) => {
    //   setOrder(response);
    //   console.log(response);
    // });
  }, []);

  return (

    <OrdersPageStyle>
      <section className="orders-section">
        <OrderItem
          index={ 1 }
          id={ 1 }
          date={ 24 }
          status="product.name"
          price={ 34 }
        />
        <OrderItem
          index={ 1 }
          id={ 1 }
          date={ 24 }
          status="product.name"
          price={ 34 }
        />
        <OrderItem
          index={ 1 }
          id={ 1 }
          date={ 24 }
          status="product.name"
          price={ 34 }
        />
        <OrderItem
          index={ 1 }
          id={ 1 }
          date={ 24 }
          status="product.name"
          price={ 34 }
        />
      </section>

    </OrdersPageStyle>
  );
}
