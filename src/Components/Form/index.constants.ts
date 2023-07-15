import { StyledComponent } from "styled-components";
import { OrderItemsProps } from "../../Controllers/ordersController";
import { Input } from "./index.styles";

interface InputProps {
  component: StyledComponent<any, any, {}, never>;
  label: string;
  name: InputsName;
  props: { [key: string]: string };
}

export interface FormProps {
  onSubmit: Function;
  onClose: Function;
  editOrder?: OrderItemsProps;
}

type InputsName = "name" | "request";

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

export const startTopsState = (initial = false) => {
  const topsState: { [key: string]: boolean } = {};
  inputs.forEach((input) => (topsState[input.name] = initial));
  return topsState;
};

export const startValuesState = () => {
  const valuesState: { [key: string]: string } = {};
  inputs.forEach((input) => (valuesState[input.name] = ""));
  return valuesState;
};

export const setValuesBy = (editOrder: OrderItemsProps) => {
  const valuesState: { [key: string]: string } = {};
  inputs.forEach((input) => (valuesState[input.name] = editOrder[input.name]));
  return valuesState;
};
