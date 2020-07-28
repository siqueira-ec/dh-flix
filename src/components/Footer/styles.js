import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--white);

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin-bottom: 49px;
  }
`;

export const FooterLogo = styled.img`
  max-width: 190px;
  margin-top: 20px;

  @media (max-width: 800px) {
    max-width: 100px;
  }
`;

export const FooterCopyright = styled.p`
  margin-bottom: 20px;
`;
