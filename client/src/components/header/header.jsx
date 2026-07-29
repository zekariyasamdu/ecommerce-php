import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context.jsx";
import { useCart } from "../../context/cart-context.jsx";
import { useFavorites } from "../../context/favorites-context.jsx";
import Button from "../ui/button/button.jsx";

const Header = () => {
  const { user, isLoggedIn, signOut } = useAuth();
  const { count } = useCart();
  const { products: favorites } = useFavorites();
  const navigate = useNavigate();
  const name = isLoggedIn ? user.name : "Guest";

  return (
    <nav className="navbar">
      <Link className="nav-brand" to="/">
        Zeus
      </Link>

      <div className="navbar-links">
        <Link to="/product">Products</Link>
        <Link to="/favorite">
          Favorite
          {favorites.length > 0 && <span className="nav-badge">{favorites.length}</span>}
        </Link>
        <Link to="/cart">
          Cart
          {count > 0 && <span className="nav-badge">{count}</span>}
        </Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="navbar-actions">
        <Button id="add-btn" onClick={() => navigate("/products/new")}>
          Add
        </Button>
        <Button
          id="signout-btn"
          onClick={async () => {
            await signOut();
            navigate("/signin");
          }}
        >
          Signout
        </Button>
        <div id="nav-user">{name}</div>
      </div>
    </nav>
  );
};

export default Header;
