import React from 'react';

import { UsersContainer, UsersListHeader, UsersContent } from './styles';

export default function Users() {
  return (
    <UsersContainer>
      <UsersContent>
        <div className="title">
          <h1>Usuários</h1>
        </div>
        <UsersListHeader>
          <div>
            <button type="button">Criar</button>
            <button type="button">Deletar</button>
          </div>
        </UsersListHeader>
      </UsersContent>
    </UsersContainer>
  );
}
