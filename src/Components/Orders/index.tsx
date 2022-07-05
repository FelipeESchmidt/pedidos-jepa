import React, { useContext } from "react";
import { OrdersContext } from "../../Contexts/OrdersContext";
import NewOrderButton from "../NewOrderButton";

import * as S from "./index.styles";

function Orders() {
  const currentTime = Date.now();

  const orders = useContext(OrdersContext);
  const visibleOrders = orders.filter(
    (order) => order.expirationDate > currentTime
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
        <p style={{ color: "white" }}>{order.id}</p>
      ))}
      <NewOrderButton ordersLength={visibleOrders.length} />
    </S.StyledWrapper>
  );
}

export default Orders;
