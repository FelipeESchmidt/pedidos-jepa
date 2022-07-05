import React from "react";
import { OrderProps } from "../../Controllers/ordersController";
import Button from "../Button";

import * as S from "./index.styles";

interface OrderComponentProps {
  order: OrderProps;
}

const Order = ({ order }: OrderComponentProps) => {
  return (
    <S.StyledWrapper>
      {order.items.map((orderItem) => (
        <>{orderItem.id}</>
      ))}
      <Button>Novo item</Button>
    </S.StyledWrapper>
  );
};

export default Order;
