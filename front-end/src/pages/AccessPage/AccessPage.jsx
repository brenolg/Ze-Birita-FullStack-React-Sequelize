import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import logo from '../../images/logo.png';
import AccessPageForm from './FormComponent';
import { AccessPageStyle } from './styles';

export default function AccessPage() {
  const loginRoute = useRouteMatch('/login');

  return (
    <AccessPageStyle>

      <section className="logo-section">
        <img className="logo-img" alt="logo" src={ logo } />

        <div className="text-logo-container">
          <h1 className="logo-title title-text">Zé</h1>
          <h1 className="logo-title title-text">Birita</h1>
        </div>

        <div className="text-logo-container">
          <span className="logo-subtitle medium-text">Delivery</span>
          <span className="logo-subtitle medium-text">de Bebidas</span>
        </div>
      </section>

      <section className="form-section">
        <h2 className="form-title large-text">{ loginRoute ? 'LOGIN' : 'CADASTRO' }</h2>
        <AccessPageForm />
      </section>

    </AccessPageStyle>
  );
}
