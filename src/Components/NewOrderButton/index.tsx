import React from "react";
import { child, set } from "firebase/database";

import { createOrder } from "../../Controllers/ordersController";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";

import * as S from "./index.styles";

interface NewOrderButtonProps {
  ordersLength: number;
}

const NewOrderButton = ({ ordersLength }: NewOrderButtonProps) => {
  const smallButton = ordersLength > 0;
  const ordersDb = useDatabaseRef("orders");

  const handleClick = () => {
    const newOrder = createOrder(0);
    set(child(ordersDb, newOrder.id), newOrder);
  };

  const renderSmallButton = () => (
    <S.StyledNewOrderButtonSmall onClick={handleClick}>
      + Novo pedido
    </S.StyledNewOrderButtonSmall>
  );

  const renderBigButton = () => (
    <S.StyledNewOrderButtonBig onClick={handleClick}>
      + Criar pedido
    </S.StyledNewOrderButtonBig>
  );

  return smallButton ? renderSmallButton() : renderBigButton();
};

export default NewOrderButton;
