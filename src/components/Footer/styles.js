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

  padding: 32px 16px;

  @media (max-width: 800px) {
    margin-bottom: 49px;
  }
`;

export const FooterLogo = styled.img`
  max-width: 100px;

  @media (max-width: 800px) {
    max-width: 80px;
  }
`;

export const FooterCopyright = styled.p``;
