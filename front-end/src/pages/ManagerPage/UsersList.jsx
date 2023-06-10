import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCustomers, getSellers } from '../../services/APICommunication';
import Context from '../../context/Context';
import { notify } from '../../services/notifications/notifications';

export default function UsersList() {
  const { userData } = useContext(Context);
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  const timer = 2500;
  const forbidden = 401;
  const unauthorized = 403;
  const handleError = (response) => {
    notify(response.status);
    if (response.status === forbidden || response.status === unauthorized) {
      setTimeout(() => {
        history.push('/login');
      }, timer);
    }
  };

  useEffect(() => {
    if (userData.token) {
      getCustomers(userData.token).then((response) => {
        if (response.error) {
          handleError(response);
          return;
        }
        setUserList(response.data);
      });

      getSellers(userData.token).then((response) => {
        setUserList((prevUserList) => [...prevUserList, ...response]);
      });
    }
  }, [userData]);

  const handleDeleteBtn = (id) => {
    // const confirmDelete = window.confirm('Tem certeza que deseja excluir?');
    // fetch aqui de delete| se o fetch retornar um erro, ele vai cair no catch e vai retornar um alert com o erro
    const newUsersList = userList.filter((user) => user.id !== Number(id));

    setUserList(newUsersList);
  };

  return (
    <div className="users-list">

      <div className="label-section medium-text">
        <span className="label-id-button">Id</span>
        <span className="user-label">Nome</span>
        <span className="user-label">Email</span>
        <span className="user-label">Tipo</span>
        <span className="label-del-button">Excluir</span>
      </div>

      {userList.length && userList.map((user) => (
        <div key={ user.id } className="user-container medium-text">
          <span className="user-id">{ user.id }</span>
          <span className="user-content">{ user.name }</span>
          <span className="user-content">{ user.email}</span>
          <span className="user-content">{ user.role}</span>
          <button
            className="user-button"
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
