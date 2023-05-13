import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import accessFetch from '../../utils/APICommunication';
import AccessForm from '../styles';

export default function AccessPageForm({ logIn }) {
  const history = useHistory();
  const [accessCredentials, setAccessCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const newState = { ...accessCredentials, [name]: value };
    setAccessCredentials(newState);
  };

  const handleAccess = async () => {
    const accessData = await accessFetch(accessCredentials, logIn);
    // após a requisição, usar o context para salvar as infos do usuário no estado global
    console.log(accessData);
  };

  return (
    <AccessForm>
      <form>
        {logIn ? <h1>App de Delivery</h1> : <h2>Cadastro</h2>}
        {!logIn && (
          <label htmlFor="name">
            <p>Nome</p>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={ accessCredentials.name }
            />
          </label>)}
        <label htmlFor="email">
          <p>Login</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@exemplo.com"
            value={ accessCredentials.email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          <p>Senha</p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="***********"
            value={ accessCredentials.password }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ handleAccess }
        >
          {logIn ? 'LOGIN' : 'CADASTRAR'}
        </button>
        {logIn && (
          <button type="button" onClick={ () => history.push('/register') }>
            Ainda não tenho conta
          </button>)}
      </form>
    </AccessForm>
  );
}

AccessPageForm.propTypes = ({
  logIn: PropTypes.bool.isRequired,
});
