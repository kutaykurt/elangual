import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ hinzufügen

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    {/* ✅ Provider um die gesamte App */}
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </HelmetProvider>
);

reportWebVitals();
