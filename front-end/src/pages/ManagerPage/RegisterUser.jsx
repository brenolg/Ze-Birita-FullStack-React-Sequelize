import React from 'react';

export default function RegisterUser() {
  return (

    <form className="form-register">
      <label className="register-label medium-text" htmlFor="name">
        Nome
        <input className="default-input register-input" />
      </label>
      <label className="register-label medium-text" htmlFor="name">
        Email
        <input className="default-input register-input" />
      </label>
      <label className="register-label medium-text" htmlFor="name">
        Senha
        <input className="default-input register-input" />
      </label>

      <label htmlFor="x" className="register-select-label medium-text">
        Role
        <select
          className=" register-select default-input"
          name="clientSelect "
        >
          <option value="seller">
            Seller
          </option>
          <option value="administrator">
            Administrator
          </option>
          <option value="customer">Customer</option>

        </select>
      </label>
      <button className="register-button" type="button">Cadastrar</button>
    </form>

  );
}
