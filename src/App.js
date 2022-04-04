import React from 'react';
import { ModalProvider } from 'styled-react-modal';
import Routes from './routes';

import { SessionProvider } from './hooks/useSession';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <Routes />
        <GlobalStyle />
      </ModalProvider>
    </SessionProvider>
  );
}
