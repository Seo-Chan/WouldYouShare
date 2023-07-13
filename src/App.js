import React from "react";
import Authentication from "./components/auth/Authentication";
import Router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Authentication />
      <Router />
    </>
  );
}

export default App;
