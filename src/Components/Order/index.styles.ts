import styled from "styled-components";
import Button from "../Button";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.basic};
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.basic};
  border-radius: 10px;
  box-sizing: border-box;
`;

export const StyledNewItemButton = styled(Button)`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;
