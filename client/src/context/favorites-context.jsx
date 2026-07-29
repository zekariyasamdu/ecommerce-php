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

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (!isLoggedIn) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const data = await api.get("/favorites");
      setProducts(data.products);
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    refresh().catch(() => setProducts([]));
  }, [refresh]);

  const ids = useMemo(() => new Set(products.map((p) => p.id)), [products]);

  const isFavorite = useCallback((productId) => ids.has(productId), [ids]);

  /**
   * Flips the heart immediately, then reconciles with the server so the
   * favorites page and every product card stay in sync.
   */
  const toggleFavorite = useCallback(
    async (product) => {
      const wasFavorite = ids.has(product.id);

      setProducts((current) =>
        wasFavorite
          ? current.filter((p) => p.id !== product.id)
          : [{ ...product, is_favorite: true }, ...current],
      );

      try {
        await api.post("/favorites", { product_id: product.id });
      } catch (error) {
        await refresh();
        throw error;
      }
    },
    [ids, refresh],
  );

  const value = useMemo(
    () => ({ products, loading, ids, isFavorite, toggleFavorite, refresh }),
    [products, loading, ids, isFavorite, toggleFavorite, refresh],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
