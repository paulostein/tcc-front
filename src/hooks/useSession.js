import React, { useState, createContext, useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { loginApi } from '../services/login';
import { userApi } from '../services/user';

const SessionContext = createContext({});

function SessionProvider({ children }) {
  const { signIn } = loginApi();
  const { getUserData } = userApi();
  const [session, setSession] = useState({});

  function getUserDataByToken(token) {
    const { id, name, email } = jwtDecode(token);
    return {
      id,
      name,
      email,
    };
  }

  function setInitialSession() {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      const user = getUserDataByToken(jwtToken);
      setSession({ user, token: jwtToken });
    }
  }

  useEffect(() => {
    const validateToken = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        if (jwtToken) {
          const { id } = getUserDataByToken(jwtToken);
          const { data } = await getUserData(id, jwtToken);
          setSession({ user: data, token: jwtToken });
        }
      } catch (error) {
        localStorage.removeItem('token');
        setSession({});
        console.error(error);
      }
    };
    setInitialSession();
    validateToken();
  }, []);

  async function setUserSession(email, password) {
    try {
      const { data: token } = await signIn(email, password);
      const user = getUserDataByToken(token);
      setSession({ user, token });
      localStorage.setItem('token', token);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  function unsetUserSession() {
    setSession({});
    localStorage.removeItem('token');
  }

  return (
    <SessionContext.Provider
      value={{ session, setUserSession, unsetUserSession }}
    >
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
