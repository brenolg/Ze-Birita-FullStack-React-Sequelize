import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AccessPageForm from './FormComponent';
import { AccessPageStyle } from './styles';
import logo from '../../images/logo.png';

export default function AccessPage() {
  const loginRoute = useRouteMatch('/login');

  return (
    <AccessPageStyle>

      <div className="conteiner access__conteiner">
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

        <div className="content access__content">
          <hgroup className="access__title">
            <h1>App Delivery</h1>
            <h2>{ loginRoute ? 'Login' : 'Cadastro' }</h2>
          </hgroup>
          <AccessPageForm />
        </div>
      </div>
    </AccessPageStyle>
  );
}
