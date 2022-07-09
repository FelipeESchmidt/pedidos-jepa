import styled from "styled-components";
import { Card } from "../../Styles/GlobalStyles";
import Button from "../Button";

export const StyledWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledPlaceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.basic};
  :last-child {
    border-bottom: 0;
  }
`;

export const StyledSelectButton = styled(Button)`
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.secondary};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`;
