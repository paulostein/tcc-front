import React, { useState, createContext, useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const SessionContext = createContext({});

function SessionProvider({ children }) {
  const [session, setSession] = useState({});

  useEffect(() => {
    const validateToken = () => {
      const storageData = localStorage.getItem('token');
      if (storageData) {
        setSession({ token: storageData });
      }
    };
    validateToken();
  }, []);

  function getUsarData(token) {
    const { id, name, email } = jwtDecode(token);
    return {
      id,
      name,
      email,
    };
  }

  function setUserSession(token) {
    const user = getUsarData(token);
    setSession({ user, token });
    localStorage.setItem('token', token);
  }

  return (
    <SessionContext.Provider value={{ session, setUserSession }}>
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
