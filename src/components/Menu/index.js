import React from 'react';

// assets
import Logo from '../../assets/img/dhflix_logo.png';

// components
import { MenuWrapper, MenuLogo } from './styles';
import Button from '../Button';

const Menu = () => (
  <MenuWrapper>
    <a href="/dh-flix">
      <MenuLogo src={Logo} alt="DH-Flix Logo" />
    </a>

    <Button as="a" href="/">
      Novo Vídeo
    </Button>
  </MenuWrapper>
);

export default Menu;
