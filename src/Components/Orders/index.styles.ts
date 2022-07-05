import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 5%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledTop = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const StyledTitle = styled.h4`
  color: ${({ theme }) => theme.colors.basic};
  text-shadow: 0 0 4px black;
  font-size: ${({ theme }) => theme.fontSizes.big};
`;
