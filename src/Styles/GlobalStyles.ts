import styled, { createGlobalStyle } from "styled-components";
import { CiCircleRemove } from "react-icons/ci";

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

export const CloseButton = styled(CiCircleRemove)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

export default GlobalStyle;
