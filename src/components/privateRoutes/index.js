import React from 'react';
import Login from '../../pages/login';
import { useSession } from '../../hooks/useSession';

export default function PrivateRoutes({ children }) {
  const { session } = useSession();
  const token = localStorage.getItem('token');

  if (!session.token && !token) {
    return <Login />;
  }

  return children;
}
