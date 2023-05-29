import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { IoBeerSharp } from 'react-icons/io5';
import { FiShoppingBag, FiLogIn } from 'react-icons/fi';
import Context from '../context/Context';
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

  return (
    <header className="main-header">

      <div className="left-header">
        <IoBeerSharp className="logo-icon" />

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
            {userData && userData.role === 'customer' ? 'Carrinho' : 'Histórico' }
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
            <button className="medium-text nav-buttons" type="button">
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
              <span className="small-text">
                Olá,
              </span>
              <span className="small-text">
                {userName}
              </span>
            </div>
          </div>
        )
          : (
            <button
              type="button"
              className="header-login-btn"
              onClick={ () => {
                handleAccessBtn();
              } }
            >
              ENTRAR
            </button>)}

        {userData.role !== 'administrator' && (
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
