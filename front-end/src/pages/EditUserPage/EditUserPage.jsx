import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import { getUserDetails } from '../../services/APICommunication';
import { EditUserStyle } from './styles';

export default function EditUserPage({ match }) {
  const { id } = match.params;
  const { userData } = useContext(Context);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (userData.token) {
      getUserDetails(id, userData.token).then((response) => {
        setUser(response.data);
      });
    }
  }, [id]);

  return (
    <EditUserStyle>
      <section>
        <button
          className="return-btn large-text"
          type="button"
          onClick={ () => history.push('/manager') }
        >
          <HiArrowNarrowLeft className="arrow-icon" />
          VOLTAR
        </button>

        <div className="user-info medium-text">
          <h1 className="info-title large-text">Informações do Usuário</h1>

          <div className="label-container">
            <span className="id-label">Id</span>
            <span className="user-label">Nome</span>
            <span className="user-label">Email</span>
            <span className="user-label">Role</span>
          </div>

          <div className="user-values-container">
            <span className="id-value">{id}</span>
            <span className="user-values">{user.name}</span>
            <span className="user-values">{user.email}</span>
            <span className="user-values">{user.role}</span>
          </div>
        </div>
      </section>
    </EditUserStyle>
  );
}

EditUserPage.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
});
