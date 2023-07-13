import React from "react";
import Authentication from "./components/auth/Authentication";
import Router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Authentication />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
