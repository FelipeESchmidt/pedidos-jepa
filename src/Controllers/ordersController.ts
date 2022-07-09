import { generateId } from "../Utils/idGenerator";
import { parseOrderItems } from "../Utils/parseOrders";

const twoHoursInMilliseconds = 7200000;

export interface OrderProps {
  id: string;
  expirationDate: number;
  items: Array<OrderItemsProps>;
  placeId: string;
  isAvailable: boolean;
}

export interface OrderItemsProps {
  id: string;
  name: string;
  request: string;
}

export const createOrder = (placeId: string): OrderProps => {
  const order: OrderProps = {
    id: generateId(16),
    expirationDate: new Date().getTime() + twoHoursInMilliseconds,
    items: [],
    placeId,
    isAvailable: true,
  };
  return order;
};

export const createOrderItem = (
  name: string,
  request: string
): OrderItemsProps => {
  const orderItem: OrderItemsProps = {
    id: generateId(8),
    name,
    request,
  };
  return orderItem;
};

export const addItemToOrder = (order: OrderProps, item: OrderItemsProps) =>
  order.items.push(item);

const validateAvailability = (expirationDate: number) => {
  const currentTime = new Date().getTime();
  return expirationDate > currentTime;
};

const normalizeOrder = (order: any): OrderProps => ({
  id: order.id,
  expirationDate: order.expirationDate,
  items: normalizeItems(parseOrderItems(order.items)),
  placeId: order.placeId,
  isAvailable: validateAvailability(order.expirationDate),
});

const normalizeItem = (item: any): OrderItemsProps => ({
  id: item.id,
  name: item.name,
  request: item.request,
});

export const normalizeOrders = (orders: Array<any>): Array<OrderProps> =>
  orders.map(normalizeOrder);

export const normalizeItems = (items: Array<any>): Array<OrderItemsProps> =>
  items.map(normalizeItem);
