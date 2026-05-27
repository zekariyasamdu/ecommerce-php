import HomeScreen from "../src/views/home-view.js";
import SigninScreen from "../src/views/signin-view.js";
import ProductScreen from "./views/product-view.js";
import SignupScreen from "./views/signup-view.js";
import "./global.css";
import { store } from "./store/index.js";
import { parseRequestURL } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/signin": SigninScreen,
  "/signup": SignupScreen,
  "/products/:id": ProductScreen,
};
export const router = async () => {
  const request = parseRequestURL();
  let parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "");

  if (!store.state.user && parseUrl !== "/signin" && parseUrl !== "/signup") {
    parseUrl = "/signin";
    window.location.hash = "#/signin";
  }

  if (store.state.user && (parseUrl === "/signin" || parseUrl === "/signup")) {
    parseUrl = "/";
    window.location.hash = "#/";
  }

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById("root");

  main.innerHTML = await screen.render(request);

  if (screen.after_render) {
    await screen.after_render();
  }
};
