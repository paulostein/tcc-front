import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { userApi } from '../../services/user';
import { useSession } from '../../hooks/useSession';

import {
  UsersContainer,
  UsersListHeader,
  UsersContent,
  UsersListBody,
  StyledModal,
} from './styles';

export default function Users() {
  const { session } = useSession();
  const { getUsers, deleteUser } = userApi();
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(async () => {
    const { data } = await getUsers(session.token);
    data.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setUsers(data);
  }, []);

  async function handleDeleteUser(id) {
    await deleteUser(id, session.token);
    alert('Usuário deletado');
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <UsersContainer>
      <UsersContent>
        <div className="title">
          <h1>Usuários</h1>
        </div>
        <UsersListHeader>
          <div>
            <button onClick={toggleModal}>Criar</button>
          </div>
        </UsersListHeader>
        <UsersListBody>
          <table>
            <tbody>
              <tr>
                <th>Email</th>
                <th>Nome</th>
                <th>Setor</th>
                <th />
              </tr>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>-</td>
                  <td>
                    <FaTrash
                      className="delete"
                      onClick={() => handleDeleteUser(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </UsersListBody>
      </UsersContent>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>I am a modal!</span>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </UsersContainer>
  );
}
