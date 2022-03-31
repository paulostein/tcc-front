import React from 'react';

import { useSession } from '../../hooks/useSession';
import Header from '../header';
import SideBar from '../sideBar';
import Login from '../../pages/login';

import { Container } from './styles';

export default function AuthRoute({ children }) {
  const { session } = useSession();

  if (!session.token) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <SideBar />
      <Container>
        <div className="children">{children}</div>
      </Container>
    </>
  );
}
