import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CheckoutStyle } from './styles';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import SaleItem from './SaleItem';
import SaleForm from './SaleForm';

export default function CheckoutPage() {
  const { cartValue, logIn } = useContext(Context);
  const [saleList, setSaleList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    setSaleList(cartList);
  }, []);

  const handleCheckoutBtn = () => {
    history.push('/login');
  };

  return (

    <CheckoutStyle>
      <main className="checkout-main">

        <span>
          Total: R$
          {cartValue.toFixed(2) }
        </span>
        <div className="description">Description</div>

        {saleList.length && saleList.map((product, index) => (
          <SaleItem
            index={ index }
            key={ product.id }
            id={ product.id }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity || 0 }
            list={ saleList }
            setList={ setSaleList }
          />
        ))}

        <SaleForm />

        {!logIn
        && (
          <div className="login">
            <h1>Faça o login para finalizar a compra</h1>
            <button
              onClick={ handleCheckoutBtn }
              type="button"
            >
              Login
            </button>
          </div>
        )}

      </main>
    </CheckoutStyle>
  );
}
