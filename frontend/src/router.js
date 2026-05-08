import HomeScreen from "../src/views/home-view.js";
import SigninScreen from "../src/views/signin-view.js";
import ProductScreen from "./views/product-view.js";
import { parseRequestURL } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/signin": SigninScreen,
  "/products/:id": ProductScreen,
};
export const router = async () => {
  const request = parseRequestURL();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "");

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById("root");

  main.innerHTML = await screen.render(request);

  if (screen.after_render) {
    await screen.after_render();
  }
};
