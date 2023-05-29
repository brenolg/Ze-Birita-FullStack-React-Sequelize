import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import OrderItem from './OrderItem';
import Status from './Status';
import { getOrderDetails } from '../../services/APICommunication';
import { OrderDetailStyle } from './styles';
import Context from '../../context/Context';

export default function OrderDetailsPage({ match }) {
  const { id } = match.params;
  const { userData } = useContext(Context);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');
  const [status, setStatus] = useState('');
  const location = useLocation();

  useEffect(() => {
    getOrderDetails(id, userData.token).then((response) => {
      if (response.message) {
        return alert(response.message);
      }
      setOrder(response);
      const data = new Date(response.saleDate);
      const dataFormatada = data.toLocaleDateString('pt-BR');

      setFormattedDate(dataFormatada);
      setProducts(response.products);
      setStatus(response.status);
    });
  }, [location.pathname, id]);

  return (

    <OrderDetailStyle>
      <main className="order-main">

        <div className="order-details medium-text">

          <span className="order-id">{`Pedido ${order.id}`}</span>
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

        <div className="total-order-container">
          <button
            className="total-order order-btn large-text"
            type="button"
          >
            Order Page

          </button>
          <span className="total-order large-text">{`R$ ${order.totalPrice}`}</span>
        </div>

      </main>
    </OrderDetailStyle>
  );
}

OrderDetailsPage.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
});
