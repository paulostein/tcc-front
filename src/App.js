import React from 'react';
import Routes from './routes';
import { SessionProvider } from './hooks/useSession';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <SessionProvider>
      <Routes />
      <GlobalStyle />
    </SessionProvider>
  );
}
