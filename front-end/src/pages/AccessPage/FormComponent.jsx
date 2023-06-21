import { useContext, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Context from '../../context/Context';
import { fetchLogin, fetchRegister } from '../../services/APICommunication';
import LocalStorage from '../../services/LocalStorageHandler';
import { AccessFormStyle } from './styles';

export default function AccessPageForm() {
  const { setLogIn, setUserData } = useContext(Context);
  const loginRoute = useRouteMatch('/login');

  const history = useHistory();
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState([]);
  const [accessCredentials, setAccessCredentials] = useState({
    email: '',
    password: '',
  });

  const errorTimer = 6000;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const emailIsValid = () => {
    if (!error && accessCredentials.email.length) {
      if (!emailRegex.test(accessCredentials.email)) {
        setError('Email Inválido');
        setEmailError(true);
      }

      if (!accessCredentials.email.includes('@')) {
        setError('Email deve ter um @');
        setEmailError(true);
      }
    }
    setTimeout(() => {
      setError(false);
      setEmailError(false);
    }, errorTimer);
  };

  const passwordSize = 6;
  const passwordIsValid = () => {
    if (!error && accessCredentials.password.length) {
      if (accessCredentials.password.length < passwordSize) {
        setError('Senha deve conter no mínimo 6 caracteres');
        setPasswordError(true);
      }
      if (!accessCredentials.password.match(/\d/)) {
        setError('Senha deve conter pelo menos um número');
        setPasswordError(true);
      }
      if (!accessCredentials.password.match(/^(?=.*[A-Z])/)) {
        setError('Senha deve conter pelo menos uma letra maiúscula');
        setPasswordError(true);
      }
      if (!accessCredentials.password.match(/^(?=.*[a-z])/)) {
        setError('Senha deve conter pelo menos uma letra minúscula');
        setPasswordError(true);
      }
    }
    setTimeout(() => {
      setError(false);
      setPasswordError(false);
    }, errorTimer);
  };

  const handleChange = ({ target: { name, value } }) => {
    const newState = { ...accessCredentials, [name]: value };
    setAccessCredentials(newState);
    console.log(name);
    if (name === 'email') {
      emailIsValid();
    }
    if (name === 'password') {
      passwordIsValid();
    }
  };

  const handleAccess = async () => {
    let accessData;
    if (loginRoute) {
      accessData = await fetchLogin(accessCredentials);
    } else {
      accessData = await fetchRegister(accessCredentials);
    }

    if (accessData.message) {
      setTimeout(() => setError(''), errorTimer);
      setError(accessData.message);

      return;
    }

    LocalStorage.set('user', accessData);

    setUserData(accessData);
    setLogIn(true);
    history.push('/products');
  };

  return (
    <AccessFormStyle>
      <form className="form-register">
        {!loginRoute && (
          <label className="register-label" htmlFor="name">
            Nome
            <input
              className="register-input default-input"
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              value={ accessCredentials.name }
              onChange={ handleChange }
              minLength="8"
              required
            />
          </label>
        )}

        <label className="register-label" htmlFor="email">
          Email
          <input
            className={
              `register-input default-input 
              ${emailError ? 'input-error' : ''}`
            }
            id="email"
            type="email"
            name="email"
            placeholder="email@exemplo.com"
            value={ accessCredentials.email }
            onChange={ handleChange }
            required
          />
        </label>
        <label className="register-label" htmlFor="password">
          Senha
          <input
            className={
              `register-input default-input 
              ${passwordError ? 'input-error' : ''}`
            }
            id="password"
            type="password"
            name="password"
            placeholder="***********"
            value={ accessCredentials.password }
            onChange={ handleChange }
            minLength="6"
            required
          />
        </label>

        <span className="error">{error}</span>

        <button
          type="button"
          onClick={ handleAccess }
          className="form-button login-button"
        >
          {loginRoute ? 'LOGIN' : 'CADASTRAR' }
        </button>

        {loginRoute && (
          <button
            type="button"
            onClick={ () => history.push('/register') }
            className="form-button register-button"
          >
            QUERO CRIAR UMA CONTA
          </button>)}

      </form>
    </AccessFormStyle>
  );
}
