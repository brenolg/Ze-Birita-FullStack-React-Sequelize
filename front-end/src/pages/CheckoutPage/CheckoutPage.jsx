import React, { useEffect, useContext, useState } from 'react';
import { CheckoutStyle } from './styles';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import SaleItem from './SaleItem';
import SaleForm from './SaleForm';

export default function CheckoutPage() {
  const { cartValue } = useContext(Context);
  const [saleList, setSaleList] = useState([]);

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    setSaleList(cartList);
  }, []);

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

      </main>
    </CheckoutStyle>
  );
}
