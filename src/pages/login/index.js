import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import { useApi } from '../../hooks/useApi';
import {
  Container,
  LoginBox,
  ImageContent,
  FormInput,
  LoginDetails,
} from './styles';
import logo from '../../assets/pessoas.jpg';

export default function Login() {
  const { setUserSession } = useSession();
  const { signIn } = useApi();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  async function handleSignIn() {
    try {
      if (user && password) {
        const { data } = await signIn(user, password);
        setUserSession(data);
        navigate('/');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Container>
      <ImageContent>
        <img src={logo} alt="logo" />
      </ImageContent>
      <LoginBox>
        <h1>Bem-vindo!</h1>
        <span>Entre para continuar usando NomeDaEmpresa</span>
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
            <input type="checkbox" name="remember" />
            <span>Lembrar</span>
          </label>
          <a href="google.com">Esqueceu sua senha?</a>
        </LoginDetails>
        <button onClick={handleSignIn}>Entrar</button>
      </LoginBox>
    </Container>
  );
}
