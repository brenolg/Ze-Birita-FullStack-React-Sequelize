import React, { useEffect, useContext, useState } from 'react';
import { getCustomers, getSellers } from '../../services/APICommunication';
import Context from '../../context/Context';

export default function UsersList() {
  const { userData } = useContext(Context);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (userData.token) {
      getCustomers(userData.token).then((response) => {
        if (response.message) {
          return alert(response.message);
        }
        setUserList(response);
      });

      getSellers(userData.token).then((response) => {
        if (response.message) {
          return alert(response.message);
        }
        setUserList((prevUserList) => [...prevUserList, ...response]);
      });
    }
  }, [userData]);

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
          <button className="user-button" type="button">Excluir</button>
        </div>

      ))}
    </div>
  );
}