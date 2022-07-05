import React from "react";

import { StyledButton } from "./index.styles";

interface ButtonProps {
  children: JSX.Element | string;
  [k: string]: any;
}

const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

export default Button;
