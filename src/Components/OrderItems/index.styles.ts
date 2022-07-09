import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 10px 0;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.basic};
  text-decoration: underline;
`;

export const StyledItem = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: white;
`;

export const Name = styled.span`
  text-decoration: underline;
`;
