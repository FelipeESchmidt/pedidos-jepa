import React from "react";
import { OrderItemsProps } from "../../Controllers/ordersController";
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";

import * as S from "./index.styles";

interface OrderItemsComponentProps {
  orderItems: Array<OrderItemsProps>;
  onRemoveItem(item: OrderItemsProps): void;
  onEditItem(item: OrderItemsProps): void;
}

const OrderItems = ({
  orderItems,
  onRemoveItem,
  onEditItem,
}: OrderItemsComponentProps) => {
  const createTitle = (): string => {
    const l = orderItems.length;
    if (!l) return "Pedido vazio";
    const mainText = `${l} Itens no pedido:`;
    return l !== 1 ? mainText : mainText.replace("ns", "m");
  };

  const renderItem = (item: OrderItemsProps) => (
    <S.StyledItem key={item.id}>
      <S.StyledItemText>
        <S.Name>{item.name}</S.Name>: {item.request}
      </S.StyledItemText>
      <S.StyledIcons>
        <FiEdit2 data-edit onClick={() => onEditItem(item)} />
        <BiTrash data-remove onClick={() => onRemoveItem(item)} />
      </S.StyledIcons>
    </S.StyledItem>
  );

  return (
    <S.StyledWrapper>
      <S.StyledTitle>{createTitle()}</S.StyledTitle>
      <S.StyledItems>
        {orderItems.map((orderItem) => renderItem(orderItem))}
      </S.StyledItems>
    </S.StyledWrapper>
  );
};

export default OrderItems;
