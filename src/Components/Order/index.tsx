import { child, set } from "firebase/database";
import React, { useState } from "react";
import { OrderProps } from "../../Controllers/ordersController";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { generateId } from "../../Utils/idGenerator";
import Form from "../Form";

import * as S from "./index.styles";

interface OrderComponentProps {
  order: OrderProps;
}

type OrderMode = "list" | "form";

const Order = ({ order }: OrderComponentProps) => {
  const orderItemsDb = useDatabaseRef(`orders/${order.id}/items`);

  const [mode, setMode] = useState<OrderMode>("list");

  const handleNewItem = () => {
    setMode("form");
  };

  const closeForm = () => {
    setMode("list");
  };

  const handleCreateItem = (values: { [k: string]: string }) => {
    closeForm();

    const newItem = { ...values, id: generateId(8) };
    set(child(orderItemsDb, newItem.id), newItem);
  };

  const renderList = () => (
    <>
      {order.items.map((orderItem) => (
        <div
          key={orderItem.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p style={{ fontSize: "25px", color: "white" }}>{orderItem.name}</p>
          <p style={{ fontSize: "25px", color: "white" }}>
            {orderItem.request}
          </p>
        </div>
      ))}
      <S.StyledNewItemButton onClick={handleNewItem}>
        + Novo item
      </S.StyledNewItemButton>
    </>
  );

  const renderForm = () => (
    <Form onSubmit={handleCreateItem} onClose={closeForm} />
  );

  const renderByMode = () => {
    const modeRenders: { [k in OrderMode]: Function } = {
      form: renderForm,
      list: renderList,
    };
    return modeRenders[mode]();
  };

  return <S.StyledWrapper>{renderByMode()}</S.StyledWrapper>;
};

export default Order;
