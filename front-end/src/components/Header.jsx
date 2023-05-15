import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../context/Context';
import './Header.css';
import LocalStorage from '../utils/LocalStorageHandler';

export default function AccessPage() {
  const [roleText, setRoleText] = useState('');
  const { logIn, setLogIn, userData, setUserData } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [roleTextDetails, setRoleTextDetails] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
    } else {
      setUserName(null);
    }
  }, [logIn, setLogIn, setUserData, userData]);

  const buildRoleText = (role) => {
    if (role) {
      if (role === 'administrator') {
        setRoleText('Gerenciar Usuários');
      }
      if (role === 'customer') {
        setRoleText('Produtos');
      }
      if (role === 'seller') {
        setRoleText('Pedidos');
      }
    }
  };

  const buildRoleDetails = (role) => {
    if (role === 'customer') {
      setRoleTextDetails('Meus Pedidos');
    }
  };

  useEffect(() => {
    if (userData) {
      buildRoleText(userData.role);
      buildRoleDetails(userData.role);
    }
  }, [logIn, setLogIn, userData, setUserData]);

  const handleTest = () => {
    LocalStorage.set('user', userLocal);

    const user = LocalStorage.get('user');
    setUserData(user);
  };

  const handleAccessBtn = () => {
    if (logIn) {
      LocalStorage.remove('user');
      setUserData(null);
      setLogIn(false);
      history.push('/products');
    } else {
      history.push('/login');
    }
  };

  return (
    <header className="main-header">

      <div className="role-container">
        <div className="role-description">
          <span className="title-description">
            {roleText }
          </span>
        </div>
        <div className="details-container">
          <span className="details-info">
            {roleTextDetails}

          </span>
        </div>
      </div>

      <div
        className="user-container"
        style={ logIn
          ? { justifyContent: 'space-between' }
          : { justifyContent: 'flex-end' } }
      >
        {logIn && (
          <div className="username-info">
            <span className="user-title">
              {userName}
            </span>
          </div>
        )}
        <nav className="nav-header">
          <button
            type="button"
            className="header-btns"
            onClick={ () => {
              handleAccessBtn();
            } }

          >
            <span className="header-btns-content">
              {logIn ? 'Sair' : 'Log-In'}
            </span>
          </button>
        </nav>

      </div>
    </header>
  );
}
