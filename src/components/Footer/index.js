import React from 'react';
import FooterBase from './styles';

import Logo from '../../assets/img/dhflix_logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="DH-Flix Logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/"> #Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
