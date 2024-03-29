import * as React from "react";
import { CloseButton } from "../../Styles/GlobalStyles";
import {
  FormProps,
  inputs,
  setValuesBy,
  startTopsState,
  startValuesState,
} from "./index.constants";

import * as S from "./index.styles";

function Form({ onSubmit, onClose, editOrder }: FormProps) {
  const [tops, setTops] = React.useState(startTopsState());
  const [values, setValues] = React.useState(startValuesState());

  const handleTopsChange = (name: string, top: boolean) =>
    setTops({ ...tops, [name]: top });

  const handleInputFocus = (name: string) => handleTopsChange(name, true);
  const handleInputBlur = (name: string, value: any) =>
    handleTopsChange(name, !!value);

  const handleInputChange = (name: string, value: any) => {
    if (!tops[name]) handleTopsChange(name, true);
    setValues({ ...values, [name]: value });
  };

  const isButtonEnable = (): boolean => {
    const inputValues = Object.values(values).map((inputValue) => !!inputValue);
    return inputValues.reduce((a, b) => !!a && !!b, true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isButtonEnable()) return;
    const payload = {
      ...values,
    };
    setTops(startTopsState());
    setValues(startValuesState());
    onSubmit(payload);
  };

  React.useEffect(() => {
    if (!editOrder) return;
    setValues(setValuesBy(editOrder));
    setTops(startTopsState(true));
  }, [editOrder]);

  return (
    <S.StyledContainer>
      <S.StyledCloseWrapper>
        <CloseButton onClick={() => onClose()} />
      </S.StyledCloseWrapper>
      {inputs.map((input) => (
        <S.InputContainer key={input.label}>
          <S.Label top={tops[input.name]} htmlFor={input.props.id}>
            {input.label}
          </S.Label>
          <input.component
            {...input.props}
            value={values[input.name]}
            onFocus={() => handleInputFocus(input.name)}
            onBlur={(e: any) => handleInputBlur(input.name, e.target.value)}
            onChange={(e: any) => handleInputChange(input.name, e.target.value)}
          />
        </S.InputContainer>
      ))}
      <S.FormButton enable={isButtonEnable()} onClick={handleSubmit}>
        Pedir
      </S.FormButton>
    </S.StyledContainer>
  );
}

export default Form;
