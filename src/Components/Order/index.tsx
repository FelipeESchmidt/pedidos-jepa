import { child, set, remove } from "firebase/database";
import React, { useContext, useState } from "react";

import { PlacesContext } from "../../Contexts/PlacesContext";
import {
  OrderItemsProps,
  OrderProps,
} from "../../Controllers/ordersController";
import { getPlaceById } from "../../Controllers/placesController";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { useCopyOrder } from "../../Hooks/useCopyOrder";
import { usePassword } from "../../Hooks/usePassword";
import { CloseButton } from "../../Styles/GlobalStyles";
import { generateId } from "../../Utils/idGenerator";
import { parseDateToLocale } from "../../Utils/parseDates";

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
  const orderDb = useDatabaseRef("orders");
  const orderItemsDb = useDatabaseRef(`orders/${order.id}/items`);
  const { confirmPassword } = usePassword();
  const { copyOrderToClipboard } = useCopyOrder();

  const [mode, setMode] = useState<OrderMode>("list");
  const [orderToEdit, setOrderToEdit] = useState<OrderItemsProps>();

  const handleNewItem = () => {
    clearEdit();
    setMode("form");
  };

  const closeForm = () => {
    clearEdit();
    setMode("list");
  };

  const handleRemoveOrder = () => {
    if (confirmPassword()) remove(child(orderDb, order.id));
  };

  const handleEditItem = (orderItem: OrderItemsProps) => {
    setMode("form");
    setOrderToEdit(orderItem);
  };

  const handleRemoveItem = (orderItem: OrderItemsProps) => {
    const mountRemoveOrderText = (item: OrderItemsProps) =>
      `Deseja remover o pedido "${item.request}" de ${item.name}?`;

    if (!window.confirm(mountRemoveOrderText(orderItem))) return;
    if (confirmPassword()) remove(child(orderItemsDb, orderItem.id));
  };

  const handleCreateItem = (values: { [k: string]: string }) => {
    closeForm();

    const newItem = { ...values, id: generateId(8) };
    set(child(orderItemsDb, newItem.id), newItem);
  };

  const clearEdit = () => setOrderToEdit(undefined);

  const renderOrderDetails = () => (
    <>
      <S.StyledTopButtons>
        <CloseButton onClick={handleRemoveOrder} />
        <S.StyledCopyIcon onClick={() => copyOrderToClipboard(order)} />
      </S.StyledTopButtons>
      <Place place={orderPlace} />
      <OrderItems
        orderItems={order.items}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
      />
      <S.StyledNewItemButton onClick={handleNewItem}>
        + Novo item
      </S.StyledNewItemButton>
      <S.StyledExpiration>
        {parseDateToLocale(order.expirationDate, "Expira às")}
      </S.StyledExpiration>
    </>
  );

  const renderForm = () => (
    <Form onSubmit={handleCreateItem} onClose={closeForm} />
  );

  const renderByMode = () => {
    const modeRenders: { [k in OrderMode]: Function } = {
      form: renderForm,
      list: renderOrderDetails,
    };
    return modeRenders[mode]();
  };

  return <S.StyledWrapper>{renderByMode()}</S.StyledWrapper>;
};

export default Order;
