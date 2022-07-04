import {
  normalizeItems,
  normalizeOrders,
  OrderItemsProps,
  OrderProps,
} from "../Controllers/ordersController";

export const parseOrders = (orders: any): Array<OrderProps> => {
  if (!orders) {
    return [];
  }
  const ordersAsArray = Object.values(orders);
  if (Array.isArray(ordersAsArray)) {
    return normalizeOrders(ordersAsArray);
  }
  return normalizeOrders([ordersAsArray]);
};

export const parseOrderItems = (items: any): Array<OrderItemsProps> => {
  if (!items) {
    return [];
  }
  const itemsAsArray = Object.values(items);
  if (Array.isArray(itemsAsArray)) {
    return normalizeItems(itemsAsArray);
  }
  return normalizeItems([itemsAsArray]);
};
