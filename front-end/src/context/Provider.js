import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LocalStorage from '../services/LocalStorageHandler';
import Context from './Context';

export default function Provider({ children }) {
  const [logIn, setLogIn] = useState(false);
  const [userData, setUserData] = useState({
    id: '', name: '', email: '', role: '', token: '' });
  const [cartValue, setCartValue] = useState(0);
  const [productList, setProductList] = useState([]);
  const location = useHistory();

  const userHasLogin = async () => {
    const userLogin = await LocalStorage.get('user');

    let hasLogin = false;
    if (userLogin !== null) {
      hasLogin = true;
    }
    setLogIn(hasLogin);
  };

  useEffect(() => {
    const bool = userHasLogin();
    setLogIn(bool);
  }, [setUserData]);
  // verificação ao carregar a página se usuario está logado

  const userDataValue = async () => {
    const userValues = await LocalStorage.get('user');
    if (userValues !== null) {
      setUserData({
        id: userValues.id,
        name: userValues.name,
        email: userValues.email,
        role: userValues.role,
        token: userValues.token });
    }
  };

  useEffect(() => {
    userDataValue();
  }, [logIn, setLogIn, setUserData]);
  // seta os dados do usuário ao logar e renderizar pagina

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];

    if (cartList.length) {
      const notNullQuantity = cartList.filter((product) => product.quantity > 0);
      LocalStorage.set('shopping_cart', notNullQuantity);
    }

    if (cartValue === 0) {
      const priceArray = [];
      cartList.forEach((product) => {
        const itemTotal = product.price * product.quantity;
        priceArray.push(itemTotal);
      });

      const totalValue = priceArray.reduce((acc, curr) => acc + curr, 0);

      setCartValue(totalValue);
    }
  }, [cartValue, setCartValue, location]);
  // seta o valor total do carrinho ao renderizar pagina de acordo com o local storage

  const value = useMemo(
    () => ({
      logIn,
      userData,
      cartValue,
      productList,
      setProductList,
      setLogIn,
      setUserData,
      setCartValue,
    }),
    [logIn, userData, cartValue, productList],
  );

  return <Context.Provider value={ value }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
