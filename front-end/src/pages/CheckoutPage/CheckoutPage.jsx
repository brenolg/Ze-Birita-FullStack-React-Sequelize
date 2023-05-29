import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CheckoutStyle } from './styles';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import SaleItem from './SaleItem';
import SaleForm from './SaleForm';

export default function CheckoutPage() {
  const { cartValue, setCartValue, logIn } = useContext(Context);
  const [saleList, setSaleList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    setSaleList(cartList);
  }, [cartValue, setCartValue]);

  const handleCheckoutBtn = () => {
    history.push('/login');
  };

  if (saleList.length === 0) {
    return (

      <CheckoutStyle>
        <main className="checkout-main">
          <div>
            <h1 className="label label-title large-text">Não há produtos no carrinho</h1>
            <button
              onClick={ () => history.push('/products') }
              className="redirect-login large-text"
              type="button"
            >
              Products Page
            </button>
          </div>
        </main>
      </CheckoutStyle>
    );
  } return (

    <CheckoutStyle>
      <main className="checkout-main">
        <div className="label-div-container small-text">

          <div className="label label-index">Item</div>
          <div className="label label-name">Descrição</div>
          <div className="label label-price label-numbers">Valor Unitário</div>
          <div className="label label-sub-total label-numbers">Sub-total</div>
          <div className="label label-quantity label-numbers">Quantidade</div>
          <div className="label label-delete">Remover Item</div>

        </div>

        {saleList.length && saleList.map((product, index) => (
          <SaleItem
            index={ index }
            key={ product.id }
            id={ product.id }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity }
            list={ saleList }
            setList={ setSaleList }
          />
        ))}

        <span className="total-price title-text">
          {`Total: R$ ${cartValue.toFixed(2)}`}
        </span>

        <SaleForm />

        {!logIn && saleList.length && (
          <div className="login-redirect">
            <h1 className="large-text">Faça o login para finalizar a compra</h1>
            <button
              className="redirect-login large-text"
              onClick={ handleCheckoutBtn }
              type="button"
            >
              ENTRAR
            </button>
          </div>
        )}
      </main>

    </CheckoutStyle>
  );
}
