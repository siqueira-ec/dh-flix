import React from "react";

import dados from "./mock-data/dados_iniciais.json";

import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        videoDescription="Teste"
        url={dados.categorias[0].videos[0].url}
      />
      <Carousel ignoreFirstVideo category={dados.categorias[0]} />
      <Carousel ignoreFirstVideo category={dados.categorias[1]} />
      <Carousel ignoreFirstVideo category={dados.categorias[2]} />
      <Carousel ignoreFirstVideo category={dados.categorias[3]} />
      <Carousel ignoreFirstVideo category={dados.categorias[4]} />
      <Footer />
    </div>
  );
};

export default App;
