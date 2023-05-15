import { useContext, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Context from '../../context/Context';
import { fetchLogin, fetchRegister } from '../../services/APICommunication';
import LocalStorage from '../../services/LocalStorageHandler';
import { AccessFormStyle } from './styles';

export default function AccessPageForm() {
  const { setLogIn } = useContext(Context); // @Breno: Conferir se faz sentido seguir usando esse estado!!
  const loginRoute = useRouteMatch('/login');

  const history = useHistory();
  const [accessCredentials, setAccessCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const newState = { ...accessCredentials, [name]: value };
    setAccessCredentials(newState);
  };

  const handleAccess = async () => {
    let accessData;
    if (loginRoute) {
      accessData = await fetchLogin(accessCredentials);
    } else {
      accessData = await fetchRegister(accessCredentials);
    }
    console.log('handleAccess', accessData);
    // antes de fazer o history.push, verificar se o accessData tem o token
    LocalStorage.set('user', accessData);
    setLogIn(true);
    history.push('/products');
  };

  return (
    <AccessFormStyle>
      <form>
        <div className="form_fields">
          {!loginRoute && (
            <label className="label" htmlFor="name">
              <p>Nome</p>
              <input
                className="input"
                id="name"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={ accessCredentials.name }
                onChange={ handleChange }
                minLength="12"
                required
              />
            </label>
          )}

          <label className="label" htmlFor="email">
            {loginRoute ? <p>Login</p> : <p>Email</p>}
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="email@exemplo.com"
              value={ accessCredentials.email }
              onChange={ handleChange }
              required
            />
          </label>
          <label className="label" htmlFor="password">
            <p>Senha</p>
            <input
              className="input"
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
          <button
            type="button"
            onClick={ handleAccess }
            className="button button_primary"
          >
            {loginRoute ? 'LOGIN' : 'CADASTRAR' }
          </button>
          {loginRoute && (
            <button
              type="button"
              onClick={ () => history.push('/register') }
              className="button button_tertiary"
            >
              Ainda não tenho conta
            </button>)}
        </div>
      </form>
    </AccessFormStyle>
  );
}
