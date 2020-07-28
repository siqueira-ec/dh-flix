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
  width: 180px;
  height: 50px;
  transition: opacity 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
