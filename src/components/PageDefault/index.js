import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);

  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;

  flex: 1;
`;

// import { Container } from './styles';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
