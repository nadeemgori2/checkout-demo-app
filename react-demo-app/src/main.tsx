// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { defineCustomElements } from "checkout-asnmt-app/loader";
import "./index.css";

// Register Stencil web components globally
defineCustomElements();

// Bootstrap React app with Redux and render to #root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
