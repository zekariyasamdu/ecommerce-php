import { isLoggedIn, signOut } from "../../auth.js";
import { store } from "../../store/index.js";
import "./header.css";

const Header = {
  render: async () => {
    const name = isLoggedIn() ? store.state.user.name : "Guest";
    return `
      <nav class="navbar">
        <a class="nav-brand">Zeus</a>
          <a href="#/">Home</a>
          <a href="#/products/1">Products</a>
          <button id="signout" >signout</button>
        <div id="nav-user">
          ${name}
        </div>
      </nav>
    `;
  },

  after_render: async () => {
    store.subscribe("user", (user) => {
      const navUser = document.getElementById("nav-user");
      if (navUser) navUser.textContent = user ? user.name : "Guest";
    });

    const btn = document.querySelector("#signout");
    btn.addEventListener("click", () => {
      signOut();
      window.location.hash = "#/signin";
    });
  },
};

export default Header;
