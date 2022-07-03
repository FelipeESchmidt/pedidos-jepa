import { generateId } from "../Utils/idGenerator";

const threeHoursInMilliseconds = 7200000;

export interface OrderProps {
  id: string;
  expirationDate: Date;
  items: Array<any>;
  placeId: number;
  isAvailable: boolean;
}

export const createOrder = (placeId: number): OrderProps => {
  const order: OrderProps = {
    id: generateId(16),
    expirationDate: new Date(new Date().getTime() + threeHoursInMilliseconds),
    items: [],
    placeId,
    isAvailable: true,
  };
  return order;
};

const validateAvailability = (expirationDate: Date) => {
  const currentTime = new Date().getTime();
  const expirationDateTime = new Date(expirationDate).getTime();
  return expirationDateTime > currentTime;
};

const normalizeOrder = (order: any): OrderProps => ({
  id: order.id,
  expirationDate: order.expirationDate,
  items: order.items,
  placeId: order.placeId,
  isAvailable: validateAvailability(order.expirationDate),
});

export const normalizeOrders = (orders: Array<any>): Array<OrderProps> =>
  orders.map(normalizeOrder);
