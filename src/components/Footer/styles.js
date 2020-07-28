import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--white);

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & a img {
    max-width: 252px;
    margin-top: 20px;
  }

  & p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;

    & a img {
      max-width: 105px;
    }
  }
`;

export default FooterBase;
