import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaUsers,
  FaList,
  FaHome,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

import { Container } from './styles';

export default function SideBar() {
  const location = useLocation();
  return (
    <Container>
      <div>
        <div
          className={location.pathname === '/' ? 'option selected' : 'option'}
        >
          <FaHome viewBox="0 0 640 640" className="icon" />
          <Link to="/">Home</Link>
        </div>
        <div
          className={
            location.pathname === '/users' ? 'option selected' : 'option'
          }
        >
          <FaUsers viewBox="0 0 640 640" className="icon" />
          <Link to="/users">Usuários</Link>
        </div>
        <div
          className={
            location.pathname === '/utils' ? 'option selected' : 'option'
          }
        >
          <FaList viewBox="0 0 640 640" className="icon" />
          <Link to="/utils">Links úteis</Link>
        </div>
      </div>
      <div className="socials">
        <div>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin viewBox="0 0 640 640" className="icon" />
          </a>
        </div>
        <div>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram viewBox="0 0 640 640" className="icon" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter viewBox="0 0 640 640" className="icon" />
          </a>
        </div>
      </div>
    </Container>
  );
}
