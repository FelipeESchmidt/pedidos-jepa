import React from "react";
import { OrderItemsProps } from "../../Controllers/ordersController";
import Place from "../Place";

import * as S from "./index.styles";

interface OrderItemsComponentProps {
  orderItems: Array<OrderItemsProps>;
}

const OrderItems = ({ orderItems }: OrderItemsComponentProps) => {
  const createTitle = (): string => {
    const l = orderItems.length;
    if (!l) return "Pedido vazio. Adicione um item";
    const mainText = `${l} Itens no pedido:`;
    return l !== 1 ? mainText : mainText.replace("ns", "m");
  };

  const renderItem = (item: OrderItemsProps) => (
    <div key={item.id}>
      <S.StyledItem>
        <S.Name>{item.name}</S.Name>: {item.request}
      </S.StyledItem>
    </div>
  );

  return (
    <S.StyledWrapper>
      <Place />
      <S.StyledTitle>{createTitle()}</S.StyledTitle>
      {orderItems.map((orderItem) => renderItem(orderItem))}
    </S.StyledWrapper>
  );
};

export default OrderItems;
