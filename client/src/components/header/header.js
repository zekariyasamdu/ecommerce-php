import "./header.css";
import { isLoggedIn, signOut } from "../../auth.js";
import { store } from "../../store/index.js";

function Header() {
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
      store.subscribe("user", (user) => {
        const navUser = document.getElementById("nav-user");

        if (navUser) {
          navUser.textContent = user ? user.name : "Guest";
        }
      });
      signout.addEventListener("click", () => {
        signOut();
        window.location.hash = "#/signin";
      });
    },
  };
}

export default Header;
