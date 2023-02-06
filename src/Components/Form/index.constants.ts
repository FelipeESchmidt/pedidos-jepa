import { StyledComponent } from "styled-components";
import { Input } from "./index.styles";

interface InputProps {
  component: StyledComponent<any, any, {}, never>;
  label: string;
  name: string;
  props: { [key: string]: string };
}

export interface FormProps {
  onSubmit: Function;
  onClose: Function;
}

export const inputs: Array<InputProps> = [
  {
    component: Input,
    label: "Nome",
    name: "name",
    props: { type: "text", id: "name", name: "name" },
  },
  {
    component: Input,
    label: "Item",
    name: "request",
    props: { type: "text", id: "item", name: "item", autoComplete: "off" },
  },
];

export const startTopsState = () => {
  const topsState: { [key: string]: boolean } = {};
  inputs.forEach((input) => (topsState[input.name] = false));
  return topsState;
};

export const startValuesState = () => {
  const valuesState: { [key: string]: string } = {};
  inputs.forEach((input) => (valuesState[input.name] = ""));
  return valuesState;
};
