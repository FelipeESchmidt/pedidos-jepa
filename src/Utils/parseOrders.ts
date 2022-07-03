import { normalizeOrders, OrderProps } from "../Controllers/ordersController";

export const parseOrders = (orders: Array<any> | any): Array<OrderProps> => {
  if (!orders) {
    return [];
  }
  if (Array.isArray(orders)) {
    return normalizeOrders(orders);
  }
  return normalizeOrders([orders]);
};
