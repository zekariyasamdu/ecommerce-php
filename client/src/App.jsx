import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context.jsx";
import LandingScreen from "./views/landing/landing-view.jsx";
import ProductScreen from "./views/product/product-view.jsx";
import ProductDetailScreen from "./views/product-detail/product-detail-view.jsx";
import NewProductScreen from "./views/new-product/new-product-view.jsx";
import SigninScreen from "./views/signin/signin-view.jsx";
import SignupScreen from "./views/signup/signup-view.jsx";
import FavoritesScreen from "./views/favorites/favorites.jsx";
import CartScreen from "./views/cart/cart.jsx";
import ProfileScreen from "./views/profile/profile-view.jsx";
import NotFound from "./views/notfound/notfound.jsx";

// Everything that is not the landing page or an auth screen requires a session.
function RequireAuth({ children }) {
  const { user, ready } = useAuth();
  const location = useLocation();

  // Hold the redirect until the stored token has been revalidated, otherwise a
  // page refresh bounces a signed-in user to the signin screen.
  if (!ready) return null;

  if (!user) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }
  return children;
}

// Signed in users have no business on the signin/signup screens. This is also
// what lands you somewhere useful right after signing in: the auth forms just
// set the user and let this redirect run.
function RequireGuest({ children }) {
  const { user, ready } = useAuth();
  const location = useLocation();

  if (!ready) return null;

  if (user) {
    // Send them back to whatever RequireAuth bounced them off of.
    return <Navigate to={location.state?.from?.pathname || "/product"} replace />;
  }
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />

      <Route
        path="/signin"
        element={
          <RequireGuest>
            <SigninScreen />
          </RequireGuest>
        }
      />
      <Route
        path="/signup"
        element={
          <RequireGuest>
            <SignupScreen />
          </RequireGuest>
        }
      />

      <Route
        path="/product"
        element={
          <RequireAuth>
            <ProductScreen />
          </RequireAuth>
        }
      />
      {/* Static segment outranks /products/:id, so "new" never reads as an id. */}
      <Route
        path="/products/new"
        element={
          <RequireAuth>
            <NewProductScreen />
          </RequireAuth>
        }
      />
      <Route
        path="/products/:id"
        element={
          <RequireAuth>
            <ProductDetailScreen />
          </RequireAuth>
        }
      />
      <Route
        path="/favorite"
        element={
          <RequireAuth>
            <FavoritesScreen />
          </RequireAuth>
        }
      />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <CartScreen />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <ProfileScreen />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
