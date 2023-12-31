import React, { useContext, useEffect, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FiLogIn, FiShoppingBag } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../context/Context';
import logo from '../images/logo.png';
import LocalStorage from '../services/LocalStorageHandler';
import './Header.css';
import SearchBar from './SearchBar';

export default function AccessPage() {
  const {
    logIn,
    setLogIn,
    userData,
    setUserData,
    cartValue,
    setCartValue,
    setProductList,
  } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [cartLength, setCartLength] = useState(0);
  const history = useHistory();
  const accessPath = useRouteMatch(['/login', '/register']);

  useEffect(() => {
    const cartList = LocalStorage.get('shopping_cart') || [];
    if (cartList.length === 1 && cartList[0].quantity === 0) {
      setCartLength(0);
      return;
    }

    setCartLength(cartList.length);
  }, [setCartLength, cartValue, setCartValue, setProductList]);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
    } else {
      setUserName(null);
    }
  }, [logIn, setLogIn, setUserData, userData]);

  const handleAccessBtn = () => {
    setLogIn(false);
    setUserData([]);
    LocalStorage.remove('user');
    history.push('/login');
  };

  const buildCartText = (status) => {
    const notificationMessages = {
      administrator: 'Histórico',
      seller: 'Histórico',
    };

    const defaultText = 'Carrinho';

    const text = notificationMessages[status] || defaultText;
    return text;
  };

  return (
    <header className="main-header">

      <div className="left-header">
        <button
          className="login-header-btn"
          onClick={ () => history.push('/products') }
          type="button"
        >
          <img src={ logo } alt="logo" className="logo-icon" />
        </button>

        <nav className="nav-links-header">
          <button
            className="nav-buttons medium-text"
            onClick={ () => history.push('/products') }
            type="button"
          >
            Produtos
          </button>
          <button
            className="nav-buttons medium-text"
            onClick={ () => history.push('/checkout') }
            type="button"
          >
            {buildCartText(userData && userData.role)}
          </button>
          {logIn && (
            <button
              className="nav-buttons medium-text"
              onClick={ () => history.push('/orders') }
              type="button"
            >
              {userData && userData.role === 'customer' ? 'Compras' : 'Vendas' }
            </button>
          )}

          {userData && userData.role === 'administrator' && (
            <button
              className="medium-text nav-buttons"
              onClick={ () => history.push('/manager') }
              type="button"
            >
              Gerenciar usuário
            </button>
          )}
        </nav>
      </div>

      <SearchBar />

      <div className="right-container">

        {logIn ? (
          <div className="username-info">
            <BiUserCircle className="header-icon" />
            <div className="name-div">
              <span className="small-text">Olá,</span>
              <span className="small-text">{userName}</span>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="header-login-btn"
            onClick={ handleAccessBtn }
            style={ accessPath && accessPath.isExact && { display: 'none' } }
          >
            ENTRAR
          </button>
        )}

        {logIn && (
          <div className="cart-container">
            <button
              className="bag-btn"
              type="button"
              onClick={ () => history.push('/checkout') }
            >
              <FiShoppingBag className="header-icon" />
            </button>

            <div className="cart-values-container">
              <span className="small-text">
                {`R$ ${Math.abs(cartValue).toFixed(1)}`}
              </span>
              <span className="small-text">
                {`${cartLength} itens`}
              </span>
            </div>
          </div>
        )}

        <button
          className="login-header-btn"
          onClick={ () => {
            handleAccessBtn();
          } }
          type="button"
        >
          <FiLogIn className="header-icon" />
        </button>

      </div>
    </header>
  );
}
