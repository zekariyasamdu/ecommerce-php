import "./product-detail-view.css";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Button from "../../components/ui/button/button.jsx";
import { QUERY } from "../../services/product-services.js";
import { useCart } from "../../context/cart-context.jsx";
import { useFavorites } from "../../context/favorites-context.jsx";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, productIds } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    QUERY.getProduct(id)
      .then((data) => {
        if (active) {
          setProduct(data);
          setError("");
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.status === 404 ? "This product no longer exists." : err.message);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);

  const favorited = product ? isFavorite(product.id) : false;
  const inCart = product ? productIds.has(product.id) : false;

  const handleAdd = async () => {
    setAdding(true);
    try {
      await addToCart(product.id);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="product-detail-layout">
      <Header />

      <main className="product-detail-container">
        <button type="button" className="detail-back-link" onClick={() => navigate(-1)}>
          <ArrowLeft /> Back
        </button>

        {loading && <p className="detail-status-line">Loading product…</p>}
        {!loading && error && <p className="detail-status-line is-error">{error}</p>}

        {!loading && !error && product && (
          <div className="detail-grid">
            <div
              className="detail-image"
              style={{ backgroundImage: `url('${product.image}')` }}
            />

            <div className="detail-body">
              <span className="detail-status">{product.status}</span>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-price">{product.price}$</p>
              <p className="detail-description">{product.description}</p>

              {product.owner && (
                <p className="detail-owner">
                  Sold by <strong>{product.owner.name}</strong>
                </p>
              )}

              <div className="detail-actions">
                <Button size="btn-lg" onClick={handleAdd} disabled={adding}>
                  {inCart ? (
                    <>
                      <Check /> In cart
                    </>
                  ) : (
                    "Add to cart"
                  )}
                </Button>
                <Button
                  variant="btn-outline"
                  size="btn-lg"
                  onClick={() => toggleFavorite(product)}
                >
                  <Heart fill={favorited ? "currentColor" : "none"} />
                  {favorited ? "Saved" : "Save"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetailScreen;
