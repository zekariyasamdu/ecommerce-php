import { store } from "../../store/index.js";

const Header = {
  render: async () => {
    const name = store.isLoggedIn() ? store.state.user.name : "Guest";
    return `
      <nav class="navbar">
        <a class="nav-brand">Zeus</a>
          <a href="#/">Home</a>
          <a href="#/products/1">Products</a>
          <a href="#/signin">Sign in</a>
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
  },
};

export default Header;
