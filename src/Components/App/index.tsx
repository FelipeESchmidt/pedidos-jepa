import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { ThemeProvider } from "styled-components";

import { theme } from "../../Theme/index.theme";
import { WholePage } from "../../Styles/GlobalStyles";
import { OrdersContext } from "../../Contexts/OrdersContext";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { parseOrders } from "../../Utils/parseOrders";

const App = () => {
  const ordersDb = useDatabaseRef("orders");

  const [orders, setOrders] = useState<Array<{ id: string }>>([]);

  useEffect(() => {
    onValue(ordersDb, (snapshot) => {
      const data = snapshot.val();
      setOrders(parseOrders(data));
    });
  }, [ordersDb]);

  console.log(orders);

  return (
    <ThemeProvider theme={theme}>
      <OrdersContext.Provider value={orders}>
        <WholePage>teste</WholePage>
      </OrdersContext.Provider>
    </ThemeProvider>
  );
};

export default App;
