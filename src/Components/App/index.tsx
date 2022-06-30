import React, { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { ThemeProvider } from "styled-components";

import { theme } from "../../Theme/index.theme";
import { ordersDb } from "../../Utils/initFirebase";
import { WholePage } from "../../Styles/GlobalStyles";
import { OrdersContext } from "../../Contexts/OrdersContext";

const App = () => {
  const [orders, setOrders] = useState<Array<{ id: string }>>([]);

  const handleOrdersChange = (newOrders: any) => {
    if (!newOrders) {
      return [];
    }
    if (Array.isArray(newOrders)) {
      return newOrders;
    }
    return [newOrders];
  };

  useEffect(() => {
    onValue(ordersDb, (snapshot) => {
      const data = snapshot.val();
      setOrders(handleOrdersChange(data));
    });
  }, []);

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
