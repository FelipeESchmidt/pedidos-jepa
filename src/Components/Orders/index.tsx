import React, { useContext } from "react";
import { OrdersContext } from "../../Contexts/OrdersContext";
import NewOrderButton from "../NewOrderButton";
import Order from "../Order";

import * as S from "./index.styles";

function Orders() {
  const currentTime = Date.now();

  const orders = useContext(OrdersContext);
  const visibleOrders = orders.filter(
    (order) => order.expirationDate > currentTime
  );

  const hasEmptyOrder = !visibleOrders.reduce(
    (a, b) => (a &&= !!b.items.length),
    true
  );

  const createTitle = (): string => {
    const l = visibleOrders.length;
    const mainText = `${l} Pedidos Abertos`;
    return l !== 1 ? mainText : mainText.replaceAll("s", "");
  };

  return (
    <S.StyledWrapper>
      <S.StyledTop>
        <S.StyledTitle>{createTitle()}</S.StyledTitle>
      </S.StyledTop>
      {visibleOrders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
      {!hasEmptyOrder && visibleOrders.length < 3 && (
        <NewOrderButton ordersLength={visibleOrders.length} />
      )}
    </S.StyledWrapper>
  );
}

export default Orders;
