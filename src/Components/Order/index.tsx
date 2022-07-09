import { child, set } from "firebase/database";
import React, { useContext, useState } from "react";

import { PlacesContext } from "../../Contexts/PlacesContext";
import { OrderProps } from "../../Controllers/ordersController";
import { getPlaceById } from "../../Controllers/placesController";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { generateId } from "../../Utils/idGenerator";

import Form from "../Form";
import OrderItems from "../OrderItems";
import Place from "../Place";

import * as S from "./index.styles";

interface OrderComponentProps {
  order: OrderProps;
}

type OrderMode = "list" | "form";

const Order = ({ order }: OrderComponentProps) => {
  const places = useContext(PlacesContext);
  const orderPlace = getPlaceById(places, order.placeId);
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
      <Place place={orderPlace} />
      <OrderItems orderItems={order.items} />
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
