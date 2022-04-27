import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TiEdit } from 'react-icons/ti';

import { userApi } from '../../services/user';
import { useSession } from '../../hooks/useSession';

import {
  UsersContainer,
  UsersListHeader,
  UsersContent,
  UsersListBody,
  StyledModal,
  ModalHeader,
  ModalButtons,
  ModalContent,
  ModalOption,
} from './styles';

export default function Users() {
  const { session } = useSession();
  const { getUsers, deleteUser, createUser, updateUser } = userApi();
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [userModal, setUserModal] = useState({});
  const [editedUser, setEditedUser] = useState({});

  async function getAllUser() {
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
  }

  useEffect(() => {
    getAllUser();
  }, []);

  async function handleDeleteUser(id) {
    try {
      await deleteUser(id, session.token);
      getAllUser();
      alert('Usuário deletado');
    } catch (error) {
      console.error(error);
    }
  }

  function toggleModal() {
    setUserModal({ area: { id: 4 } });
    setIsOpen(!isOpen);
  }

  async function handleCreateUser() {
    try {
      await createUser(userModal, session.token);
      alert('Usuário criado');
      getAllUser();
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  }

  function toggleEditModal() {
    setIsEditOpen(!isEditOpen);
  }

  async function handleEditUser() {
    try {
      await updateUser(editedUser, session.token);
      alert('Usuário editado');
      getAllUser();
      toggleEditModal();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UsersContainer>
      <UsersContent>
        <div className="title">
          <h1>Usuários</h1>
        </div>
        <UsersListHeader>
          <div>
            {session.user.area.name === 'Recursos Humanos' && (
              <button onClick={toggleModal}>Criar</button>
            )}
          </div>
        </UsersListHeader>
        <UsersListBody>
          <table>
            <tbody>
              <tr>
                <th>Email</th>
                <th>Nome</th>
                <th>Setor</th>
                {session.user.area.name === 'Recursos Humanos' && <th />}
                {session.user.area.name === 'Recursos Humanos' && <th />}
              </tr>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.area.name}</td>
                  {session.user.area.name === 'Recursos Humanos' && (
                    <td>
                      <FaTrash
                        className="delete"
                        onClick={() => handleDeleteUser(user.id)}
                      />
                    </td>
                  )}
                  {session.user.area.name === 'Recursos Humanos' && (
                    <td>
                      <TiEdit
                        className="edit"
                        onClick={() => (setEditedUser(user), toggleEditModal())}
                      />
                      <StyledModal
                        isOpen={isEditOpen}
                        onEscapeKeydown={toggleEditModal}
                      >
                        <ModalHeader>
                          <h3>Editar usuário</h3>
                        </ModalHeader>
                        <ModalContent>
                          <ModalOption>
                            <span>Nome</span>
                            <input
                              type="text"
                              value={editedUser.name}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  name: e.target.value,
                                })
                              }
                            />
                          </ModalOption>
                          <ModalOption>
                            <span>Email</span>
                            <input
                              type="email"
                              value={editedUser.email}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  email: e.target.value,
                                })
                              }
                            />
                          </ModalOption>
                          <ModalOption>
                            <span>Senha</span>
                            <input
                              type="password"
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  password: e.target.value,
                                })
                              }
                            />
                          </ModalOption>
                          <ModalOption>
                            <span>Setor</span>
                            <select
                              name="select"
                              defaultValue={
                                editedUser.area ? editedUser.area.id : '4'
                              }
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  area: { id: +e.target.value },
                                })
                              }
                            >
                              <option value="4">RH</option>
                              <option value="5">Suporte</option>
                              <option value="6">Desenvolvimento</option>
                            </select>
                          </ModalOption>
                        </ModalContent>
                        <ModalButtons>
                          <button onClick={toggleEditModal}>Cancelar</button>
                          <button onClick={handleEditUser}>Editar</button>
                        </ModalButtons>
                      </StyledModal>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </UsersListBody>
      </UsersContent>
      <StyledModal isOpen={isOpen} onEscapeKeydown={toggleModal}>
        <ModalHeader>
          <h3>Criar usuário</h3>
        </ModalHeader>
        <ModalContent>
          <ModalOption>
            <span>Nome</span>
            <input
              type="text"
              onChange={(e) =>
                setUserModal({ ...userModal, name: e.target.value })
              }
            />
          </ModalOption>
          <ModalOption>
            <span>Email</span>
            <input
              type="email"
              onChange={(e) =>
                setUserModal({ ...userModal, email: e.target.value })
              }
            />
          </ModalOption>
          <ModalOption>
            <span>Senha</span>
            <input
              type="password"
              onChange={(e) =>
                setUserModal({ ...userModal, password: e.target.value })
              }
            />
          </ModalOption>
          <ModalOption>
            <span>Setor</span>
            <select
              name="select"
              onChange={(e) =>
                setUserModal({ ...userModal, area: { id: +e.target.value } })
              }
            >
              <option value="4" defaultValue>
                RH
              </option>
              <option value="5">Suporte</option>
              <option value="6">Desenvolvimento</option>
            </select>
          </ModalOption>
        </ModalContent>
        <ModalButtons>
          <button onClick={toggleModal}>Cancelar</button>
          <button onClick={handleCreateUser}>Criar</button>
        </ModalButtons>
      </StyledModal>
    </UsersContainer>
  );
}
