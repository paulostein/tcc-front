import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSession } from '../../hooks/useSession';
import image from '../../assets/people.jpg';
import logo from '../../assets/facework.jpg';

import {
  Container,
  LoginBox,
  ImageContent,
  FormInput,
  LoginDetails,
} from './styles';

export default function Login() {
  const { setUserSession } = useSession();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function handleSignIn() {
    if (user && password) {
      setUserSession(user, password);
      navigate('/');
    }
  }

  return (
    <Container>
      <ImageContent>
        <img src={image} alt="image" />
      </ImageContent>
      <LoginBox>
        <img src={logo} alt="logo" />
        <h1>Bem-vindo!</h1>
        <span>Entre para continuar usando o Facework</span>
        <FormInput>
          <div>Email</div>
          <input
            type="text"
            name="Email"
            placeholder="Digite seu email"
            onChange={(e) => setUser(e.target.value)}
          />
          <div>Senha</div>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInput>
        <LoginDetails>
          <label>
            <input type="checkbox" name="remember" checked />
            <span>Manter conectado</span>
          </label>
          <div
            className="forgot-password"
            onClick={() => alert('Entre em contato com o RH.')}
          >
            Esqueceu sua senha?
          </div>
        </LoginDetails>
        <button onClick={handleSignIn}>Entrar</button>
      </LoginBox>
    </Container>
  );
}
