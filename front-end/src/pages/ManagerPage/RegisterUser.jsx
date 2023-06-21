import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import { adminRegister } from '../../services/APICommunication';
import handleError from '../../services/HandleError';

export default function RegisterUser({ userList, setUserList }) {
  const { setLogIn } = useContext(Context);
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
    const registerData = await adminRegister(userValues);
    handleError.admin(registerData, history, setLogIn);

    if (!registerData.error) {
      setUserValues({
        name: '',
        email: '',
        password: '',
        role: 'seller',
      });
      setUserList([...userList, registerData.data]);
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
        Cadastrar
      </button>
    </form>
  );
}

RegisterUser.propTypes = ({
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setUserList: PropTypes.func.isRequired,
});
