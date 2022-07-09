import React from "react";
import { OrderProps } from "../../Controllers/ordersController";

export const OrdersContext = React.createContext<Array<OrderProps>>([]);
