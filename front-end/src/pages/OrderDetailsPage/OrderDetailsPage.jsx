import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import OrderDetail from './OrderDetail';
import Status from './Status';
import { getOrderDetails } from '../../services/APICommunication';
import { OrderDetailStyle } from './styles';
import Context from '../../context/Context';
import { notify } from '../../services/notifications/notifications';

export default function OrderDetailsPage({ match }) {
  const { id } = match.params;
  const { userData } = useContext(Context);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();

  const timer = 2500;
  const forbidden = 401;
  const unauthorized = 403;
  const handleError = (response) => {
    notify(response.status, response.message);
    if (response.status === forbidden || response.status === unauthorized) {
      setTimeout(() => {
        history.push('/login');
      }, timer);
    }
  };

  useEffect(() => {
    getOrderDetails(id, userData.token).then((response) => {
      if (userData.token) {
        if (response.error) {
          handleError(response);
          return;
        }
        setOrder(response.data);
        const data = new Date(response.data.saleDate);
        const dataFormatada = data.toLocaleDateString('pt-BR');

        setFormattedDate(dataFormatada);
        setProducts(response.data.products);
        setStatus(response.data.status);
      }
    });
  }, [id, userData.token]);

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
            id={ id }
          />
        </div>

        <div className="labels-details-container">
          <span className="label-id medium-text">Item</span>
          <span className="label-name  medium-text">Descrição</span>
          <span className="label-quantities medium-text">Quantidade</span>
          <span className="label-quantities medium-text">Valor Unitário</span>
          <span className="label-quantities medium-text">Sub-total</span>
        </div>

        {products && products.map((product, index) => (
          <OrderDetail
            index={ index }
            key={ product.id }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity }
          />
        ))}

        <div className="total-order-container">

          <span className="total-order large-text">
            {`Total  R$ ${order.totalPrice}`}
          </span>

          <button
            className="total-order order-btn large-text"
            onClick={ () => history.push('/orders') }
            type="button"
          >
            {userData
            && userData.role === 'customer' ? 'Pagina Compras' : 'Pagina Vendas' }
          </button>
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
