import styled from 'styled-components';

export const BannerMainWrapper = styled.section`
  height: 80vh;
  position: relative;
  color: var(--white);

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
  }

  &:before {
    top: 0;
    /* background: rgba(0, 0, 0, 0.5); */
    background: linear-gradient(0deg, var(--grayDark) 0%, transparent 100%);
  }

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaWrapper = styled.section`
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaWrapper.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaWrapper.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaWrapper.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaWrapper.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

export const WatchButton = styled.button`
  background: var(--white);
  border: 1px solid transparent;
  border-color: var(--black);
  border-radius: 5px;
  color: var(--black);
  cursor: pointer;
  display: none;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
