import "./cart.css";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Button from "../../components/ui/button/button.jsx";
import { useCart } from "../../context/cart-context.jsx";

const CartScreen = () => {
  const { items, count, total, loading, updateQuantity, removeItem, clearCart } =
    useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-layout">
      <Header />

      <main className="cart-container">
        <div className="cart-heading-row">
          <h1 className="cart-heading">
            Your Cart{count > 0 && ` (${count})`}
          </h1>
          {items.length > 0 && (
            <button type="button" className="cart-clear-btn" onClick={clearCart}>
              Clear cart
            </button>
          )}
        </div>

        {loading && items.length === 0 && <p className="cart-total-label">Loading…</p>}

        {!loading && items.length === 0 && (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <ShoppingCart />
            </div>
            <h4 className="cart-empty-title">Your cart is empty</h4>
            <p className="cart-empty-subtitle">
              Browse the marketplace and add something you like.
            </p>
            <Button onClick={() => navigate("/product")}>Browse products</Button>
          </div>
        )}

        {items.length > 0 && (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div
                    className="cart-row-image"
                    style={{ backgroundImage: `url('${item.product?.image}')` }}
                  />

                  <div className="cart-row-info">
                    <Link
                      className="cart-row-name"
                      to={`/products/${item.product?.id}`}
                    >
                      {item.product?.name}
                    </Link>
                    <span className="cart-row-unit">{item.product?.price}$ each</span>
                  </div>

                  <div className="qty-control">
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label="Decrease quantity"
                      disabled={item.quantity <= 1}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label="Increase quantity"
                      disabled={item.quantity >= 99}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus />
                    </button>
                  </div>

                  <span className="cart-row-subtotal">{item.subtotal}$</span>

                  <button
                    type="button"
                    className="cart-remove-btn"
                    aria-label={`Remove ${item.product?.name} from cart`}
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-value">{total}$</span>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartScreen;
