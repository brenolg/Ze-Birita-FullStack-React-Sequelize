import React, { useEffect, useContext, useState } from 'react';
import { CheckoutStyle } from './styles';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import SaleItem from './SaleItem';

export default function CheckoutPage() {
  const { cartValue } = useContext(Context);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    setProductList(cartList);
  }, []);

  const button = () => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    const userInfo = LocalStorage.get('user') || [];
    const shoppingCartValues = cartList.map((product) => {
      const { id, quantity } = product;
      return { productId: id, quantity };
    });
    const body = { userId: userInfo.id, shoppingCart: [...shoppingCartValues] };
    console.log(body);
  };

  return (
    <CheckoutStyle>
      <main className="checkout-main">
        <button type="button" onClick={ button }>Test</button>
        <span>
          Total: R$
          {cartValue.toFixed(2) }
        </span>
        <div className="description">Description</div>

        {productList.length && productList.map((product, index) => (
          <SaleItem
            index={ index }
            key={ product.id }
            id={ product.id }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity || 0 }
            list={ productList }
            setList={ setProductList }
          />
        ))}
      </main>
    </CheckoutStyle>
  );
}
