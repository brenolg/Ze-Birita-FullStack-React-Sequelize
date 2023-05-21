import React, { useEffect, useContext, useState } from 'react';
import { CheckoutStyle } from './styles';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import CartItem from './CartItem';

export default function CheckoutPage() {
  const { cartValue } = useContext(Context);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    setProductList(cartList);
  }, []);

  return (
    <CheckoutStyle>
      <main className="checkout-main">
        <span>
          Total: R$
          {cartValue.toFixed(2) }
        </span>
        <div className="description">Description</div>

        {productList.length && productList.map((product, index) => (
          <CartItem
            index={ index }
            key={ product.id }
            id={ product.id }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity || 0 }
          />
        ))}
      </main>
    </CheckoutStyle>
  );
}
