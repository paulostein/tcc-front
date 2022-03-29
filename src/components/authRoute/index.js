import React from 'react';

import { useSession } from '../../hooks/useSession';

import Header from '../header';
import Login from '../../pages/login';

export default function AuthRoute({ children }) {
  const { session } = useSession();

  if (!session.token) {
    return <Login />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
