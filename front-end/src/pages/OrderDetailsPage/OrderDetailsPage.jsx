import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderItem from './OrderItem';
import Status from './Status';
import { getOrderDetails } from '../../services/APICommunication';
import { OrderDetailStyle } from './styles';

export default function OrderDetailsPage() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');
  const [status, setStatus] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.split('/');
    const idUrl = pathName[2];

    getOrderDetails(idUrl).then((response) => {
      setOrder(response);
      const data = new Date(response.saleDate);
      const dataFormatada = data.toLocaleDateString('pt-BR');
      console.log(response);
      setFormattedDate(dataFormatada);
      setProducts(response.products);
      setStatus(response.status);
    });
  }, [location.pathname]);

  return (

    <OrderDetailStyle>
      <main className="order-main">

        <div className="order-details">

          <span>{`Pedido ${order.id}`}</span>
          <span>{order.sellerName}</span>
          <span>{formattedDate}</span>

          <Status
            status={ status }
            setStatus={ setStatus }
          />

        </div>

        {products && products.map((product, index) => (
          <OrderItem
            index={ index }
            key={ product.id }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity }
          />
        ))}

        <span className="total-price">{order.totalPrice}</span>

      </main>
    </OrderDetailStyle>
  );
}
