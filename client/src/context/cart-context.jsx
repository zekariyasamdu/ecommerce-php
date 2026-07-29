import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { api } from "../services/api.js";
import { useAuth } from "./auth-context.jsx";

const CartContext = createContext(null);

const EMPTY = { items: [], count: 0, total: 0 };

export function CartProvider({ children }) {
  const { isLoggedIn } = useAuth();
  const [cart, setCart] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (!isLoggedIn) {
      setCart(EMPTY);
      return;
    }
    setLoading(true);
    try {
      setCart(await api.get("/cart"));
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    refresh().catch(() => setCart(EMPTY));
  }, [refresh]);

  // Every cart endpoint returns the whole cart, so writes just swap state in.
  const addToCart = useCallback(async (productId, quantity = 1) => {
    setCart(await api.post("/cart", { product_id: productId, quantity }));
  }, []);

  const updateQuantity = useCallback(async (cartItemId, quantity) => {
    setCart(await api.patch(`/cart/${cartItemId}`, { quantity }));
  }, []);

  const removeItem = useCallback(async (cartItemId) => {
    setCart(await api.delete(`/cart/${cartItemId}`));
  }, []);

  const clearCart = useCallback(async () => {
    setCart(await api.delete("/cart"));
  }, []);

  const productIds = useMemo(
    () => new Set(cart.items.map((item) => item.product?.id)),
    [cart.items],
  );

  const value = useMemo(
    () => ({
      ...cart,
      loading,
      productIds,
      refresh,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [cart, loading, productIds, refresh, addToCart, updateQuantity, removeItem, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
