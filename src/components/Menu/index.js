import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/dhflix_logo.png';

import { MenuWrapper, MenuLogo } from './styles';
import Button from '../Button';

const Menu = () => (
  <MenuWrapper>
    <Link to={`${process.env.PUBLIC_URL}/`}>
      <MenuLogo src={Logo} alt="DH-Flix Logo" />
    </Link>

    <Button as={Link} to={`${process.env.PUBLIC_URL}/cadastro/video`}>
      Novo Vídeo
    </Button>
  </MenuWrapper>
);

export default Menu;
