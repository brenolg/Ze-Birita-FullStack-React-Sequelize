import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import './Header.css';
import LocalStorage from '../utils/LocalStorageHandler';

export default function AccessPage() {
  const [roleText, setRoleText] = useState('');
  const { logIn, userData, setUserData } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [roleTextDetails, setRoleTextDetails] = useState('');

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setUserRole(userData.role);
    } else {
      setUserRole(null);
      setUserName(null);
    }
  }, [logIn, userData]);

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
    return null;
  };

  useEffect(() => {
    if (logIn) {
      buildRoleText(userRole);
      buildRoleDetails(userRole);
    } else {
      buildRoleText(null);
      buildRoleDetails(null);
    }
  }, [logIn, userData, userRole]);

  const userLocal = {
    name: 'breno',
    role: 'seller',
    email: 'adm@deliveryapp.com',
    token: '123456' };

  const handleLogInBtn = () => {
    LocalStorage.set('user', userLocal);

    const user = LocalStorage.get('user');
    setUserData(user);
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

      <span className="details-info  logInInfo">{`Login: ${logIn}`}</span>
      <button
        className="details-info "
        type="button"
        onClick={ () => {
          handleLogInBtn();
        } }
      >
        Set User

      </button>

      <div className="user-container">
        <div className="username-info">
          <span className="user-title">
            {userName}
          </span>
        </div>
        <nav className="nav-header">
          <button
            type="button"
            className="header-btns"

          >
            <span className="header-btns-content">
              {logIn ? 'Entrar' : 'Sair'}
            </span>
          </button>
        </nav>

      </div>
    </header>
  );
}
