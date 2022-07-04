import { useEffect, useState } from "react";
import { onValue, child, set } from "firebase/database";
import { ThemeProvider } from "styled-components";

import { theme } from "../../Theme/index.theme";
import { WholePage } from "../../Styles/GlobalStyles";
import { OrdersContext } from "../../Contexts/OrdersContext";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { parseOrders } from "../../Utils/parseOrders";
import { createOrder, OrderProps } from "../../Controllers/ordersController";

const App = () => {
  const ordersDb = useDatabaseRef("orders");

  const [orders, setOrders] = useState<Array<OrderProps>>([]);

  useEffect(() => {
    onValue(ordersDb, (snapshot) => {
      const data = snapshot.val();
      setOrders(parseOrders(data));
    });
  }, [ordersDb]);

  const handleClick = () => {
    const newOrder = createOrder(0);
    set(child(ordersDb.ref, newOrder.id), newOrder);
  };

  return (
    <ThemeProvider theme={theme}>
      <OrdersContext.Provider value={orders}>
        <WholePage>
          <button onClick={handleClick}>clique</button>
        </WholePage>
      </OrdersContext.Provider>
    </ThemeProvider>
  );
};

export default App;
