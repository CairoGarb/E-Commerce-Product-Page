import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Header } from "./components/Header.tsx";
import { CartProvider } from "./components/CartContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Header />
      <App />
    </CartProvider>
  </React.StrictMode>
);
