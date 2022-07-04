import React, { useContext } from "react";
import { child, set } from "firebase/database";
import { createOrder } from "../../Controllers/ordersController";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { OrdersContext } from "../../Contexts/OrdersContext";

import * as S from "./index.styles";

function Orders() {
  const ordersDb = useDatabaseRef("orders");
  const orders = useContext(OrdersContext);

  const handleClick = () => {
    const newOrder = createOrder(0);
    set(child(ordersDb.ref, newOrder.id), newOrder);
  };

  return (
    <S.StyledWrapper>
      <button onClick={handleClick}>clique</button>
      {orders.map((order) => (
        <p style={{ color: "white" }}>{order.id}</p>
      ))}
    </S.StyledWrapper>
  );
}

export default Orders;
