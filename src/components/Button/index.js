import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--grayLight);
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  padding: 16px 24px;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
    width: 100%;
  }
`;

export default Button;
