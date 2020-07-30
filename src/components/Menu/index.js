import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/dhflix_logo.png';

import { MenuWrapper, MenuLogo } from './styles';
import Button from '../Button';

const Menu = () => (
  <MenuWrapper>
    <Link to="/">
      <MenuLogo src={Logo} alt="DH-Flix Logo" />
    </Link>

    <Button as={Link} to="/cadastro/video">
      Novo Vídeo
    </Button>
  </MenuWrapper>
);

export default Menu;
