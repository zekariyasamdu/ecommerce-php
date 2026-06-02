import "./global.css";
import { store } from "./store/index.js";
import { parseRequestURL } from "./utils.js";
import ProductScreen from "./views/product/product-view.js";
import SigninScreen from "./views/signin/signin-view.js";
import ProductDetailScreen from "./views/product-detail/product-detail-view.js";
import SignupScreen from "./views/signup/signup-view.js";
import LandingScreen from "./views/landing/landing-view.js";
import NotFound from "./views/notfound/notfound.js";
import FavoritesScreen from "./views/favorites/favorites.js";
import CartScreen from "./views/cart/cart.js";
import ProfileScreen from "./views/profile/profile-view.js";
import { initIcons } from "./init-icon.js";

const routes = {
  "/": LandingScreen,
  "/product": ProductScreen,
  "/products/:id": ProductDetailScreen,
  "/signin": SigninScreen,
  "/signup": SignupScreen,
  "/favorite": FavoritesScreen,
  "/cart": CartScreen,
  "/profile": ProfileScreen,
};
export const router = async () => {
  const request = parseRequestURL();
  let parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "");

  if (
    !store.state.user &&
    parseUrl !== "/signin" &&
    parseUrl !== "/signup" &&
    parseUrl !== "/"
  ) {
    parseUrl = "/signin";
    window.location.hash = "#/signin";
  }

  if (store.state.user && (parseUrl === "/signin" || parseUrl === "/signup")) {
    parseUrl = "/product";
    window.location.hash = "#/";
  }

  const screen = routes[parseUrl] ? routes[parseUrl] : NotFound;

  const main = document.getElementById("root");

  main.innerHTML = await screen.render(request);

  if (screen.after_render) {
    await screen.after_render();
  }

  initIcons();
};
