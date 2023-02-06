import styled, { css } from "styled-components";
import Button from "../Button";

const baseFormStyles = css`
  outline: none;
  pointer-events: all;
  font-size: 22px;
`;

export const StyledContainer = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 25px;
  padding: 20px 20px;
  align-items: center;
`;

export const StyledCloseWrapper = styled.div`
  margin-left: auto;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px;
  margin-bottom: 10px;
`;

export const Label = styled.label<{ top?: boolean }>`
  color: ${({ theme }) => theme.colors.basic};
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  letter-spacing: 2px;
  transition: color 0.3s ease-out;
  transition: transform 0.3s ease-out, color 0.3s ease-out;
  transform-origin: 0% 100%;
  text-align: initial;
  cursor: text;
  ${({ top }) =>
    top
      ? css`
          transform: translate(2px, -25px) scale(0.8);
          transform-origin: 0 0;
        `
      : css`
          transform: translate(12px, 12px);
        `}
`;

const basicInputStyles = css`
  ${baseFormStyles}
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: white;
  box-shadow: 0 2px 4px 1px black;
  box-sizing: border-box;
  caret-color: ${({ theme }) => theme.selected};
  ::selection {
    background-color: darkgray;
    color: white;
  }
  :-webkit-autofill,
  :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const Input = styled.input`
  ${baseFormStyles}
  ${basicInputStyles}
  height: 50px;
  line-height: 50px;
`;

const enableButton = css`
  cursor: pointer;
  padding: 10px;
`;

const disableButton = css`
  opacity: 0.3;
`;

export const FormButton = styled(Button)<{ enable: boolean }>`
  ${baseFormStyles}
  width: 100%;
  max-width: 300px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.secondary};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  ${({ enable }) => (enable ? enableButton : disableButton)};
  transition: 1s;
  :hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;
