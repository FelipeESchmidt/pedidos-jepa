import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 10px 0;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.basic};
  text-decoration: underline;
`;

export const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    cursor: pointer;
  }
`;

export const StyledItemText = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: white;
`;

export const Name = styled.span`
  text-decoration: underline;
`;
