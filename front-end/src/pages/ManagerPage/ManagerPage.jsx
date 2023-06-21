import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { getUsers } from '../../services/APICommunication';
import handleError from '../../services/HandleError';
import RegisterUser from './RegisterUser';
import UsersList from './UsersList';
import { ManagerStyle } from './styles';

export default function ManagerPage() {
  const { userData, setLogIn } = useContext(Context);
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (userData.token) {
      getUsers(userData.token).then((response) => {
        if (response.error) {
          handleError.admin(response, history, setLogIn);
          return;
        }
        setUserList(response.data);
      });
    }
  }, [userData]);

  return (
    <ManagerStyle>
      <section className="manager-section register-section">
        <h1 className="register-title large-text">Cadastro de Usuário</h1>
        <RegisterUser userList={ userList } setUserList={ setUserList } />
      </section>

      <section className="manager-section users-section">
        <h1 className="register-title large-text">Lista de Usuários</h1>
        <UsersList userList={ userList } setUserList={ setUserList } />
      </section>

    </ManagerStyle>
  );
}
