import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  padding-left: 5%;
  padding-right: 5%;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const MenuLogo = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;
