import styled from "styled-components";
import Button from "../Button";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.basic};
  border-radius: 10px;
  box-sizing: border-box;
`;

export const StyledNewItemButton = styled(Button)`
  padding: 15px 0;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;
