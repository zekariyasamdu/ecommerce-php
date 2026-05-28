import ProductScreen from "./views/product/product-view.js";
import SigninScreen from "./views/signin/signin-view.js";
import ProductDetailScreen from "./views/product-detail/product-detail-view.js";
import SignupScreen from "./views/signup/signup-view.js";
import LandingScreen from "./views/Landing/landing-view.js";
import "./global.css";
import { store } from "./store/index.js";
import { parseRequestURL } from "./utils.js";

const routes = {
  "/": LandingScreen,
  "/product": ProductScreen,
  "/signin": SigninScreen,
  "/signup": SignupScreen,
  "/products/:id": ProductDetailScreen,
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

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById("root");

  main.innerHTML = await screen.render(request);

  if (screen.after_render) {
    await screen.after_render();
  }
};
