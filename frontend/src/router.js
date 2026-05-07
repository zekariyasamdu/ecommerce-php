import HomeScreen from "../src/views/home-view.js";
import SigninScreen from "../src/views/signin-view.js";
import render from "./render.js";

const routes = {
  "/": HomeScreen,
  "/signin": SigninScreen,
};

function getPathFromHashRoute() {
  let hash = window.location.hash;
  if (!hash) return "/";
  return "/" + hash.substring(1);
}

function resolveRouteFromPath(path) {
  const route = routes[path];
  if (!route) return routes["/"];
  return route;
}

function onChangeRoute() {
  const path = getPathFromHashRoute();
  console.log("path", path);
  const route = resolveRouteFromPath(path);
  render(route());
}

export default onChangeRoute;
