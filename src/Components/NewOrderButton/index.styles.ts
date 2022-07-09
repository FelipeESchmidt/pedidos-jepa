import styled from "styled-components";
import Button from "../Button";

export const StyledNewOrderButtonSmall = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.basic};
  border: 2px solid ${({ theme }) => theme.colors.basic};
`;

export const StyledNewOrderButtonBig = styled(Button)`
  padding: 55px 0;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;
