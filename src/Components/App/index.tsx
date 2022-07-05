import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { ThemeProvider } from "styled-components";

import { theme } from "../../Theme";
import { WholePage } from "../../Styles/GlobalStyles";
import { OrdersContext } from "../../Contexts/OrdersContext";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { parseOrders } from "../../Utils/parseOrders";
import { OrderProps } from "../../Controllers/ordersController";
import Orders from "../Orders";

const App = () => {
  const ordersDb = useDatabaseRef("orders");

  const [orders, setOrders] = useState<Array<OrderProps>>([]);

  useEffect(() => {
    onValue(ordersDb, (snapshot) => {
      const data = snapshot.val();
      setOrders(parseOrders(data));
    });
  }, [ordersDb]);

  return (
    <ThemeProvider theme={theme}>
      <OrdersContext.Provider value={orders}>
        <WholePage>
          <Orders />
        </WholePage>
      </OrdersContext.Provider>
    </ThemeProvider>
  );
};

export default App;
