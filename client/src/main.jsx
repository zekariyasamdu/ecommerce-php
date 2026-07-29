import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth-context.jsx";
import { CartProvider } from "./context/cart-context.jsx";
import { FavoritesProvider } from "./context/favorites-context.jsx";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
);
