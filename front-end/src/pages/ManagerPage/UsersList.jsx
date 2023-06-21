import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import { deleteUser } from '../../services/APICommunication';
import handleError from '../../services/HandleError';

export default function UsersList({ userList, setUserList }) {
  const history = useHistory();
  const { userData, setLogIn } = useContext(Context);

  const handleDeleteBtn = async (id) => {
    const response = await deleteUser(id, userData.token);

    handleError.admin(response, history, setLogIn);
    if (response.error) {
      return;
    }

    const newUsersList = userList.filter((user) => user.id !== Number(id));
    setUserList(newUsersList);
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
