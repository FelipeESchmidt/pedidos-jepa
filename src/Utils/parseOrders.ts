export const parseOrders = (orders: any) => {
  if (!orders) {
    return [];
  }
  if (Array.isArray(orders)) {
    return orders;
  }
  return [orders];
};
