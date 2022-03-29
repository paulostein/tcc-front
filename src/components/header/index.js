import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSession } from '../../hooks/useSession';

import { HeaderContainer, Profile, Dropdown } from './styles';

export default function Header() {
  const navigate = useNavigate();
  const { session, unsetUserSession } = useSession();
  const [name, surname] = session.user.name.split(' ', 2);
  const profile = name.charAt(0) + surname.charAt(0);

  function handleLogOut() {
    unsetUserSession();
    navigate('/');
  }

  return (
    <HeaderContainer>
      <Link to="/" className="logo">
        facework
      </Link>
      <Dropdown>
        <Profile>{profile}</Profile>
        <div className="dropdown-content">
          <Link to="/profile">Meu perfil</Link>
          <div onClick={handleLogOut}>Sair</div>
        </div>
      </Dropdown>
    </HeaderContainer>
  );
}
