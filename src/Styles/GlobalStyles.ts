import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Allura', cursive;
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
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.basic};
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.basic};
  border-radius: 10px;
  box-sizing: border-box;
`;

export default GlobalStyle;
