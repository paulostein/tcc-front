import React from 'react';

import { useSession } from '../../hooks/useSession';

import { ProfileContainer, Content } from './styles';

export default function Profile() {
  const { session } = useSession();
  const { user } = session;

  return (
    <ProfileContainer>
      <div className="contents">
        <Content>
          <span className="user-label">Nome</span>
          <span className="user-info">{user.name}</span>
        </Content>
        <Content>
          <span className="user-label">Email</span>
          <span className="user-info">{user.email}</span>
        </Content>
        <Content>
          <span className="user-label">Setor</span>
          <span className="user-info">-</span>
        </Content>
      </div>
    </ProfileContainer>
  );
}
