import styled from 'styled-components';

export const VideoCardWrapper = styled.a`
  border: 2px solid ${({ categoryColor }) => categoryColor || 'red'};
  border-radius: 10px;

  text-decoration: none;
  color: white;

  width: 298px;
  height: 197px;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  display: inline-block;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
