import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { getOrderDetails } from '../../services/APICommunication';
import handleError from '../../services/HandleError';
import OrderDetail from './OrderDetail';
import Status from './Status';
import { OrderDetailStyle } from './styles';

export default function OrderDetailsPage({ match }) {
  const { id } = match.params;
  const { userData, setLogIn } = useContext(Context);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (userData.token) {
      getOrderDetails(id, userData.token).then((response) => {
        if (response.error) {
          handleError.defaultError(response, history, setLogIn);
          return;
        }
        setOrder(response.data);
        const data = new Date(response.data.saleDate);
        const dataFormatada = data.toLocaleDateString('pt-BR');

        setFormattedDate(dataFormatada);
        setProducts(response.data.products);
        setStatus(response.data.status);
      });
    }
  }, [id, userData.token]);

  return (
    <OrderDetailStyle>
      <main className="order-main">
        <button
          className="return-btn large-text"
          type="button"
          onClick={ () => history.push('/orders') }
        >
          <HiArrowNarrowLeft className="arrow-icon" />
          VOLTAR
        </button>

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
