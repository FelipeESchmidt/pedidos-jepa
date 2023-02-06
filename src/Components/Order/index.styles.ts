import styled from "styled-components";
import { IoCopy } from "react-icons/io5";

import { Card } from "../../Styles/GlobalStyles";
import Button from "../Button";

export const StyledWrapper = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNewItemButton = styled(Button)`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const StyledExpiration = styled.p`
  margin-top: 20px;
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.basic};
  text-align: right;
`;

export const StyledTopButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const StyledCopyIcon = styled(IoCopy)`
  font-size: 20px;
  color: white;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
