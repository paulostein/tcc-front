import React, { useState, createContext, useContext } from 'react';

const SessionContext = createContext({});

function SessionProvider({ children }) {
  const [session, setSession] = useState({});

  function signIn(user) {
    const token = '1234';
    setSession({ user, token });
    localStorage.setItem('token', token);
  }

  return (
    <SessionContext.Provider value={{ session, signIn }}>
      {children}
    </SessionContext.Provider>
  );
}

function useSession() {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error('useSession must be used within an SessionProvider');
  return context;
}

export { SessionProvider, useSession };
