import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 0;
  font-family: inherit;
  border-radius: 5px;
  outline: 0;
  background: none;
  box-shadow: 2px 4px 2px -2px black, inset 2px 2px 2px 0 black;
  cursor: pointer;
  :hover {
    text-shadow: 1px 0 2px black;
    box-shadow: 2px 4px 2px -2px black, inset 2px 2px 2px 0 black,
      0 0 4px 0 black;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
