import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import { deleteUser } from '../../services/APICommunication';
import { notify, notifyAdmin } from '../../services/notifications/notifications';

export default function UsersList({ userList, setUserList }) {
  const history = useHistory();
  const { userData } = useContext(Context);

  const timer = 2500;
  const forbidden = 401;
  const unauthorized = 403;
  const handleError = (response) => {
    if (response.status === forbidden || response.status === unauthorized) {
      notify(response.status, response.message);
      setTimeout(() => {
        history.push('/login');
      }, timer);
    } else {
      notifyAdmin(response);
    }
  };

  const handleDeleteBtn = async (id) => {
    const fetchDeleteUser = await deleteUser(id, userData.token);
    handleError(fetchDeleteUser);

    if (!fetchDeleteUser.error) {
      const newUsersList = userList.filter((user) => user.id !== Number(id));
      setUserList(newUsersList);
    }
  };

  const handleUpdateBtn = (id) => {
    history.push(`/manager/${id}`);
  };

  return (
    <div className="users-list">

      <div className="label-section medium-text">
        <span className="label-id-button">Id</span>
        <span className="user-label">Nome</span>
        <span className="user-label">Email</span>
        <span className="user-label">Tipo</span>
        <span className="label-del-button">Editar</span>
        <span className="label-del-button">Excluir</span>
      </div>

      {userList.length && userList.map((user) => (
        <div key={ user.id } className="user-container medium-text">
          <span className="user-id">{ user.id }</span>
          <span className="user-content">{ user.name }</span>
          <span className="user-content">{ user.email}</span>
          <span className="user-content">{ user.role}</span>
          <button
            className="user-button edit-button"
            value={ user.id }
            onClick={ (e) => handleUpdateBtn(e.target.value) }
            type="button"
          >
            Editar

          </button>
          <button
            className="user-button del-button"
            value={ user.id }
            onClick={ (e) => handleDeleteBtn(e.target.value) }
            type="button"
          >
            Excluir

          </button>
        </div>

      ))}
    </div>
  );
}

UsersList.propTypes = ({
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
