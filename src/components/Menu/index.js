import React from "react";

import Logo from "../../assets/img/dhflix_logo.png";
import "./styles.css";

import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="DH-Flix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
