import React, { useEffect, useContext, useState } from 'react';
import { CheckoutStyle } from './styles';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import SaleItem from './SaleItem';
import { postSale } from '../../services/APICommunication';

export default function CheckoutPage() {
  const { cartValue, logIn } = useContext(Context);
  const [productList, setProductList] = useState([]);
  const [userAddress, setUserAddress] = useState({
    address: '',
    number: '',
  });

  const handleAddressChange = ({ target: { name, value } }) => {
    const newState = { ...userAddress, [name]: value };
    setUserAddress(newState);
  };

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    setProductList(cartList);
  }, []);

  const handlePostSale = async () => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    const userInfo = LocalStorage.get('user') || [];
    const shoppingCartValues = cartList.map((product) => {
      const { id, quantity } = product;
      return { productId: id, quantity };
    });
    if (logIn) {
      const body = {
        userId: userInfo.id,
        sellerId: 4,
        deliveryAddress: userAddress.address,
        deliveryNumber: userAddress.number,
        shoppingCart: [...shoppingCartValues],

      };
      await postSale(body);
    }
    return alert('Faça login para finalizar a compra');
  };

  return (
    <CheckoutStyle>
      <main className="checkout-main">

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
        <form>
          <label className="label" htmlFor="name">
            <p>Endereço</p>
            <input
              className="input field-address"
              type="text"
              name="address"
              placeholder="xxx"
              value={ handleAddressChange.address }
              onChange={ handleAddressChange }
              minLength="12"
              required
            />
          </label>
          <label className="label" htmlFor="name">
            <p>Numero</p>
            <input
              className="input field-address"
              type="number"
              name="number"
              placeholder="xxx"
              value={ handleAddressChange.number }
              onChange={ handleAddressChange }
              minLength="12"
              required
            />
          </label>
          <button type="button" onClick={ handlePostSale }>Test</button>
        </form>
      </main>
    </CheckoutStyle>
  );
}
