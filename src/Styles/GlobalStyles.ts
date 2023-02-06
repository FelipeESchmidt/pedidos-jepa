import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Dosis', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const WholePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Card = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.basic};
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.basic};
  border-radius: 10px;
  box-sizing: border-box;
`;

export const CloseButton = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  :after {
    content: "";
    display: block;
    width: 2px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform-origin: top left;
    transform: rotate(-45deg) translateY(2px);
  }
  :before {
    content: "";
    display: block;
    width: 12px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform-origin: top right;
    transform: rotate(-45deg) translateX(-3px);
  }
  :hover {
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.colors.secondary} 0%, ${theme.colors.background} 55%)`};
  }
`;

export default GlobalStyle;
