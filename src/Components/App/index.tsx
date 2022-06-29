import React from "react";
import { ThemeProvider } from "styled-components";
import { WholePage } from "../../Styles/GlobalStyles";
import { theme } from "../../Theme/index.theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WholePage>teste</WholePage>
    </ThemeProvider>
  );
};

export default App;
