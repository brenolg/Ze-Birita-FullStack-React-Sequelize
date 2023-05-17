import React from 'react';

import CheckoutStyle from './styles';

export default function CheckoutPage() {
  return (
    <CheckoutStyle>
      <div className="conteiner access__conteiner">
        <div className="content access__content">
          <hgroup className="access__title">
            <h1>App Delivery</h1>
            <h2>{ loginRoute ? 'Login' : 'Cadastro' }</h2>
          </hgroup>
        </div>
      </div>
    </CheckoutStyle>
  );
}
