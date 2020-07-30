import React from 'react';
import styled from 'styled-components';

import dados from '../../mock-data/dados_iniciais.json';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background-color: var(--grayDark);
`;

const Home = () => (
  <AppWrapper>
    <Menu />
    <BannerMain
      videoTitle={dados.categorias[0].videos[0].titulo}
      url={dados.categorias[0].videos[0].url}
      videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
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
