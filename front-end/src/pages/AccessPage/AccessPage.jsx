import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AccessPageForm from './FormComponent';
import { AccessPageStyle } from './styles';

export default function AccessPage() {
  const loginRoute = useRouteMatch('/login');

  return (
    <AccessPageStyle>
      <div className="conteiner access__conteiner">
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
