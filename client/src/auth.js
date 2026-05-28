import { users } from "./data/mock.js";
import { store } from "./store/index.js";
import { StorageService } from "./store/local-storage-service.js";

export async function signin(email, password) {
  const usr = users.filter(
    (item) => item.email === email && item.password === password,
  );
  if (usr[0]) {
    console.log("logged in");
    store.state.user = usr[0];
    window.location.hash = "#/product";
    return;
  }
  console.log("user doesn't exist!");
}

export function signOut() {
  store.state.user = null;
  StorageService.remove("user");
}

export function isLoggedIn() {
  return store.state.user !== null;
}
