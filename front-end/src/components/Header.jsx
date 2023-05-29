import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiUserCircle, BiSearchAlt } from 'react-icons/bi';
import { IoBeerSharp } from 'react-icons/io5';
import { FiShoppingBag, FiLogIn } from 'react-icons/fi';
import Context from '../context/Context';
import LocalStorage from '../services/LocalStorageHandler';
import './Header.css';

export default function AccessPage() {
  const [productText, setProductsText] = useState('');
  const [checkoutText, setCheckoutText] = useState('');
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

  const buildProductsText = (role) => {
    const setRole = {
      administrator: 'Pedidos',
      customer: 'Produtos',
      seller: 'Pedidos',
    };
    setProductsText(setRole[role]);
    if (!role) {
      setProductsText('Produtos');
    }
  };

  const buildCheckoutText = (role) => {
    const setRole = {
      administrator: 'Histórico ',
      customer: 'Carrinho',
      seller: 'Histórico ',
    };
    setCheckoutText(setRole[role]);
    if (!role) {
      setCheckoutText('Carrinho');
    }
  };

  useEffect(() => {
    if (userData) {
      buildProductsText(userData.role);
      buildCheckoutText(userData.role);
    }
  }, [logIn, setLogIn, userData, setUserData]);

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
            {productText }
          </button>
          <button
            className="nav-buttons medium-text"
            onClick={ () => history.push('/checkout') }
            type="button"
          >
            {checkoutText}
          </button>

          {userData && userData.role === 'administrator' && (
            <button className="medium-text nav-buttons" type="button">
              Gerenciar usuário
            </button>
          )}
        </nav>
      </div>

      <div className="center-header">

        <button className="search-btn" type="button">
          <BiSearchAlt className="search-icon" />
        </button>

        <input
          className="search-input default-input"
          type="text"
          placeholder="Pesquise sua bebida predileta"
        />
      </div>

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
