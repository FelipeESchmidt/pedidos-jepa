import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { ThemeProvider } from "styled-components";

import { theme } from "../../Theme";
import { WholePage } from "../../Styles/GlobalStyles";
import { OrdersContext } from "../../Contexts/OrdersContext";
import { PlacesContext } from "../../Contexts/PlacesContext";
import { useDatabaseRef } from "../../Hooks/useDatabaseRef";
import { parseOrders } from "../../Utils/parseOrders";
import { parsePlaces } from "../../Utils/parsePlaces";
import { OrderProps } from "../../Controllers/ordersController";
import { PlaceProps } from "../../Controllers/placesController";
import Orders from "../Orders";
import Loading from "../Loading";

const App = () => {
  const ordersDb = useDatabaseRef("orders");
  const placesDb = useDatabaseRef("places");

  const [loadedToStart, setLoadedToStart] = useState<number>(2);
  const [orders, setOrders] = useState<Array<OrderProps>>([]);
  const [places, setPlaces] = useState<Array<PlaceProps>>([]);

  useEffect(() => {
    setLoadedToStart(2);
    onValue(ordersDb, (snapshot) => {
      const data = snapshot.val();
      setOrders(parseOrders(data));
      setLoadedToStart((ln) => ln - 1);
    });
    onValue(placesDb, (snapshot) => {
      const data = snapshot.val();
      setPlaces(parsePlaces(data));
      setLoadedToStart((ln) => ln - 1);
    });
  }, [placesDb, ordersDb]);

  return (
    <ThemeProvider theme={theme}>
      <OrdersContext.Provider value={orders}>
        <PlacesContext.Provider value={places}>
          <WholePage>{loadedToStart > 0 ? <Loading /> : <Orders />}</WholePage>
        </PlacesContext.Provider>
      </OrdersContext.Provider>
    </ThemeProvider>
  );
};

export default App;
