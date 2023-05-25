import React, { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import Status from './Status';
// import { getOrderDetails } from '../../services/APICommunication';
import { OrderDetailStyle } from './styles';

export default function OrderDetailsPage() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');

  const mockList = {
    id: 11,
    userId: 3,
    sellerId: 4,
    totalPrice: 80,
    deliveryAddress: 'rua YX',
    deliveryNumber: '2',
    saleDate: '2023-05-22T23:22:07.000Z',
    status: 'Pendente',
    products: [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.2,
        urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        quantity: 3,
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.5,
        urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
        quantity: 5,
      },
    ],
  };

  useEffect(() => {
    // getOrderDetails(id).then((response) => {
    //   setOrder(response);
    // setProducts(response.products);
    // });

    const data = new Date(mockList.saleDate);
    const dataFormatada = data.toLocaleDateString('pt-BR');

    setOrder(mockList);
    setFormattedDate(dataFormatada);
    setProducts(order.products);
  }, []);
  return (

    <OrderDetailStyle>
      <main className="order-main">
        <div className="order-details">

          <span>{order.id}</span>
          <span>{order.sellerId}</span>
          <span>{formattedDate}</span>
          <Status status={ order.status } />

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

        <span className="total-price" />
      </main>
    </OrderDetailStyle>
  );
}
