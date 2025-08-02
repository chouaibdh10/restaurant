import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 👈 OUVERT */}
        <App />
      </CartProvider>  {/* 👈 FERMÉ */}
    </BrowserRouter>
  </React.StrictMode>
);
