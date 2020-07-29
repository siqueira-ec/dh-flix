import React from 'react';
import styled from 'styled-components';

import dados from '../../mock-data/dados_iniciais.json';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background-color: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

const Home = () => (
  <AppWrapper>
    <Menu />
    <BannerMain
      videoTitle={dados.categorias[0].videos[0].titulo}
      url={dados.categorias[0].videos[0].url}
    />
    <Carousel ignoreFirstVideo category={dados.categorias[0]} />
    <Carousel ignoreFirstVideo category={dados.categorias[1]} />
    <Carousel ignoreFirstVideo category={dados.categorias[2]} />
    <Carousel ignoreFirstVideo category={dados.categorias[3]} />
    <Carousel ignoreFirstVideo category={dados.categorias[4]} />
    <Footer />
  </AppWrapper>
);

export default Home;
