import React, { useContext } from 'react';
import Context from '../context/Context';
import './Header.css';

export default function AccessPage() {
  const { logIn } = useContext(Context);

  return (
    <header className="main-header">

      <div className="role-container">
        <div className="role-description">
          <span className="title-description">x </span>
        </div>
        <div className="details-container">
          <span className="details-info">x </span>
        </div>
      </div>

      <span className="details-info  logInInfo">{`Login: ${logIn}`}</span>

      <div className="user-container">
        <div className="username-info">
          <span className="user-title">x </span>
        </div>
        <nav className="nav-header">
          <button
            type="button"
            className="header-btns"
          >
            <span className="header-btns-content">
              x
            </span>
          </button>
        </nav>

      </div>
    </header>
  );
}
