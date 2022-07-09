import React, { useState } from "react";
import { child, set } from "firebase/database";

import { createOrder } from "../../Controllers/ordersController";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";

import Places from "../Places";
import * as S from "./index.styles";

interface NewOrderButtonProps {
  ordersLength: number;
}

type NewOrderMode = "button" | "places";

const NewOrderButton = ({ ordersLength }: NewOrderButtonProps) => {
  const smallButton = ordersLength > 0;
  const ordersDb = useDatabaseRef("orders");

  const [mode, setMode] = useState<NewOrderMode>("button");

  const handleClick = () => setMode("places");
  const handleClose = () => setMode("button");

  const handleCreate = (placeId: string) => {
    const newOrder = createOrder(placeId);
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

  const renderButtonMode = () =>
    smallButton ? renderSmallButton() : renderBigButton();

  const renderPlaces = () => (
    <Places handleSelect={handleCreate} handleClose={handleClose} />
  );

  const renderByMode = () => {
    const modeRenders: { [k in NewOrderMode]: Function } = {
      button: renderButtonMode,
      places: renderPlaces,
    };
    return modeRenders[mode]();
  };

  return <>{renderByMode()}</>;
};

export default NewOrderButton;
