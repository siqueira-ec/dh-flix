import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/dhflix_logo.png';

import { FooterBase, FooterLogo, FooterCopyright } from './styles';

const Footer = () => (
  <FooterBase>
    <Link to={`${process.env.PUBLIC_URL}/`}>
      <FooterLogo src={Logo} alt="DH-Flix Logo" />
    </Link>
    <FooterCopyright>
      Orgulhosamente criado durante a #ImersãoReact da
      {' '}
      <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">Alura</a>
    </FooterCopyright>
  </FooterBase>
);

export default Footer;
