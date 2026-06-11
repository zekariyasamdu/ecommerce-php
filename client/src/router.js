import "./global.css";
import { store } from "./store/index.js";
import { getCurrentRoute, parseRequestURL } from "./utils.js";
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
const privateRoutes = {};
const publicRoutes = {};
let currentView = null;

export const router = async () => {
  const request = parseRequestURL();
  let parseUrl = getCurrentRoute(request);

  if (
    !store.state.user &&
    parseUrl !== "/signin" &&
    parseUrl !== "/signup" &&
    parseUrl !== "/"
  ) {
    window.location.hash = "#/signin";
    return;
  }
  if (store.state.user && (parseUrl === "/signin" || parseUrl === "/signup")) {
    window.location.hash = "#/";
    return;
  }

  if (currentView?.unMount) currentView.unMount();
  currentView = routes[parseUrl] ? routes[parseUrl]() : NotFound();

  const currentRoute = parseUrl;
  const main = document.getElementById("root");

  if (currentView.before_render) {
    main.innerHTML = await currentView.before_render();
    initIcons();
  }

  const html = await currentView.render(request);

  if (currentRoute !== getCurrentRoute(request)) return;

  main.innerHTML = html;

  if (currentView.after_render) await currentView.after_render();

  initIcons();
};
