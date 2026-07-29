import "./favorites.css";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import ProductItem from "../../components/product-item/product-item.jsx";
import Button from "../../components/ui/button/button.jsx";
import { useFavorites } from "../../context/favorites-context.jsx";

const FavoritesScreen = () => {
  const { products, loading } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="favorites-layout">
      <Header />

      <main className="favorites-container">
        <h1 className="favorites-heading">
          Favorites{products.length > 0 && ` (${products.length})`}
        </h1>

        {loading && products.length === 0 && <p className="product-status">Loading…</p>}

        {!loading && products.length === 0 && (
          <div className="favorites-empty">
            <div className="favorites-empty-icon">
              <Heart />
            </div>
            <h4 className="favorites-empty-title">No favorites yet</h4>
            <p className="favorites-empty-subtitle">
              Tap the heart on any product to save it here.
            </p>
            <Button onClick={() => navigate("/product")}>Browse products</Button>
          </div>
        )}

        {products.length > 0 && (
          <div className="favorites-grid">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FavoritesScreen;
