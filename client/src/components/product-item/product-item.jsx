import "./product-item.css";
import { useState } from "react";
import { Check, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/card/card.jsx";
import { useCart } from "../../context/cart-context.jsx";
import { useFavorites } from "../../context/favorites-context.jsx";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, productIds } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [adding, setAdding] = useState(false);

  const favorited = isFavorite(product.id);
  const inCart = productIds.has(product.id);

  const handleAdd = async () => {
    setAdding(true);
    try {
      await addToCart(product.id);
    } finally {
      setAdding(false);
    }
  };

  return (
    <Card id={product.id} className="product-item-card">
      <div
        className="product-image-wrapper"
        style={{ backgroundImage: `url('${product.image}')` }}
      >
        <button
          type="button"
          className={`like-btn${favorited ? " is-favorite" : ""}`}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={favorited}
          onClick={() => toggleFavorite(product)}
        >
          <Heart fill={favorited ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{product.price}$</p>
      </div>
      <div className="card-actions">
        <button
          className="btn btn-md btn-outline"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          More
        </button>
        <button className="btn btn-md btn-primary" onClick={handleAdd} disabled={adding}>
          {inCart ? (
            <>
              <Check /> Added
            </>
          ) : (
            "Add"
          )}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
