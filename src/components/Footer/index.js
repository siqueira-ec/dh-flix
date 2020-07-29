import React from 'react';
import { FooterBase, FooterLogo, FooterCopyright } from './styles';

import Logo from '../../assets/img/dhflix_logo.png';

const Footer = () => (
  <FooterBase>
    <a href="https://siqueira-ec.github.io/dh-flix">
      <FooterLogo src={Logo} alt="DH-Flix Logo" />
    </a>
    <FooterCopyright>
      Orgulhosamente criado durante a #ImersãoReact da
      {' '}
      <a href="https://www.alura.com.br/">Alura</a>
    </FooterCopyright>
  </FooterBase>
);

export default Footer;
