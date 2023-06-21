import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import { updateUser } from '../../services/APICommunication';
import handleError from '../../services/HandleError';

export default function UpdateUserForm({ id }) {
  const { userData, setLogIn } = useContext(Context);
  const history = useHistory();

  const [userValues, setUserValues] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });

  const handleUserValues = ({ target: { name, value } }) => {
    const newState = { ...userValues, [name]: value };
    setUserValues(newState);
  };

  const createUser = async () => {
    const update = await updateUser(id, userValues, userData.token);

    handleError.admin(update, history, setLogIn);

    if (!update.error) {
      setUserValues({
        name: '',
        email: '',
        password: '',
        role: '',
      });
    }
  };

  return (
    <form className="form-register">
      <label className="register-label medium-text" htmlFor="name">
        Nome
        <input
          className="default-input register-input"
          name="name"
          value={ userValues.name }
          onChange={ handleUserValues }
          required
        />

      </label>
      <label className="register-label medium-text" htmlFor="email">
        Email
        <input
          className="default-input register-input"
          name="email"
          value={ userValues.email }
          onChange={ handleUserValues }
          required
        />
      </label>

      <label className="register-label medium-text" htmlFor="password">
        Senha
        <input
          type="password"
          className="default-input register-input"
          name="password"
          value={ userValues.password }
          onChange={ handleUserValues }
          required
        />
      </label>

      <label htmlFor="role" className="register-select-label medium-text">
        Role
        <select
          className=" register-select default-input"
          name="role"
          value={ userValues.role }
          onChange={ handleUserValues }
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

      <button
        className="register-button"
        type="button"
        onClick={ createUser }
      >
        Atualizar
      </button>
    </form>
  );
}

UpdateUserForm.propTypes = ({
  id: PropTypes.string.isRequired,
});
