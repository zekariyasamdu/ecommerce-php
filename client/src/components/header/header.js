import "./header.css";
import { isLoggedIn, signOut } from "../../auth.js";
import { store } from "../../store/index.js";
import { reloadRoute } from "../../utils.js";

function Header() {
  let _unsubscribe = null;
  console.log(store._events);
  return {
    before_render: () => "",

    render: async () => {
      const name = isLoggedIn() ? store.state.user.name : "Guest";

      return `
        <nav class="navbar">
          <a class="nav-brand" href="#/">Zeus</a>

          <div class="navbar-links">
            <a href="#/product">Products</a>
            <a href="#/favorite">Favorite</a>
            <a href="#/cart">Cart</a>
            <a href="#/profile">Profile</a>
          </div>

          <div class="navbar-actions">
            <button id="addProduct" class="btn btn-primary btn-md">Add</button>
            <button id="signout" class="btn btn-primary btn-md">Signout</button>
            <div id="nav-user">${name}</div>
          </div>
        </nav>
      `;
    },

    after_render: async () => {
      const signout = document.getElementById("signout");

      _unsubscribe = store.subscribe("user", () => {
        reloadRoute();
      });
      signout.addEventListener("click", () => {
        signOut();
      });
    },

    unMount: async () => {
      if (_unsubscribe) _unsubscribe();
    },
  };
}

export default Header;
