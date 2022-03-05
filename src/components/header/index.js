import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">Login</Link>
      <Link to="/private">Private</Link>
    </HeaderContainer>
  );
}
