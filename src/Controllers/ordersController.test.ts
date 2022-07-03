import { createOrder, normalizeOrders } from "./ordersController";

describe("ordersController", () => {
  describe("create new order", () => {
    it("should create an order with basic props", () => {
      const placeId = 0;
      const newOrder = createOrder(placeId);

      expect(newOrder).toHaveProperty("id");
      expect(newOrder).toHaveProperty("placeId");
      expect(newOrder).toHaveProperty("expirationDate");
      expect(newOrder).toHaveProperty("isAvailable");
      expect(newOrder.placeId).toBe(placeId);
      expect(newOrder.isAvailable).toBeTruthy();
    });

    it("should create an order with a 16HEX", () => {
      const newOrder = createOrder(0);

      expect(newOrder.id).toHaveLength(16);
    });

    it("should create an order with a future date as expiration", () => {
      const newOrder = createOrder(0);

      const expirationDate = new Date(newOrder.expirationDate).getTime();
      const currentDate = new Date().getTime();

      expect(expirationDate).toBeGreaterThan(currentDate);
    });

    it("should create an order with a list of items", () => {
      const newOrder = createOrder(0);

      expect(newOrder).toHaveProperty("items");
      expect(newOrder.items).toHaveLength(0);
    });
  });

  describe("normalize orders", () => {
    it("should normalize and validate availability as true when expiration is in future", () => {
      const newOrder = createOrder(0);

      const normalizedOrder = normalizeOrders([newOrder])[0];

      expect(normalizedOrder.isAvailable).toBeTruthy();
    });

    it("should normalize and validate availability as false when expiration is in past", () => {
      const newOrder = createOrder(0);

      newOrder.expirationDate = new Date(new Date().getTime() - 10);

      const normalizedOrder = normalizeOrders([newOrder])[0];

      expect(normalizedOrder.isAvailable).toBeFalsy();
    });
  });
});
