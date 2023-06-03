import React from 'react';
import UsersList from './UsersList';
import { ManagerStyle } from './styles';
import RegisterUser from './RegisterUser';

export default function ManagerPage() {
  return (
    <ManagerStyle>
      <section className="manager-section register-section">
        <h1 className="register-title large-text">Cadastro de Usuário</h1>
        <RegisterUser />
      </section>

      <section className="manager-section users-section">
        <h1 className="register-title large-text">Lista de Usuários</h1>
        <UsersList />
      </section>

    </ManagerStyle>
  );
}
