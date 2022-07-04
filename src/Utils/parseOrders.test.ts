import { createOrder } from "../Controllers/ordersController";
import { parseOrders } from "./parseOrders";

const createTestOrder = () => createOrder(0);

describe("parseOrders", () => {
  it("should return an empty array when there is no orders", () => {
    const parsedOrders = parseOrders([]);

    expect(parsedOrders).toEqual([]);
    expect(parsedOrders).toHaveLength(0);
  });

  it("should return an array with one order when there is just one order", () => {
    const myOrder = createTestOrder();
    const parsedOrders = parseOrders([myOrder]);

    expect(parsedOrders).toEqual([myOrder]);
    expect(parsedOrders).toHaveLength(1);
  });

  it("should return an array of orders", () => {
    const length = Math.floor(Math.random() * (10 - 2)) + 2;
    const myOrders = [];

    for (let i = 0; i < length; i++) myOrders.push(createTestOrder());

    const parsedOrders = parseOrders(myOrders);

    expect(parsedOrders).toEqual(myOrders);
    expect(parsedOrders).toHaveLength(length);
  });
});
