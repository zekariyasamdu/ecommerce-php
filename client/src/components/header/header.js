import "./header.css";
import { isLoggedIn, signOut } from "../../auth.js";
import { store } from "../../store/index.js";
import Button from "../ui/button/button.js";

const signOutBtn = Button();
const addBtn = Button();

const Header = {
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
          ${await addBtn.render("Add", "add-btn")}
          ${await signOutBtn.render("Signout", "signout-btn")}
          <div id="nav-user">${name}</div>
        </div>
      </nav>
    `;
  },

  after_render: async () => {
    store.subscribe("user", (user) => {
      const navUser = document.getElementById("nav-user");
      if (navUser) navUser.textContent = user ? user.name : "Guest";
    });

    signOutBtn.after_render([], "btn-primary", "btn-md", null, {
      event: "click",
      callback: () => {
        signOut();
        window.location.hash = "#/signin";
      },
    });

    addBtn.after_render([], "btn-primary", "btn-md");
  },
};

export default Header;
