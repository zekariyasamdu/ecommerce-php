import Header from "../components/header/header.js";
import { store } from "../store/index.js";

const HomeScreen = {
  render: async () => {
    const header = await Header.render();
    return `
      <div class="home-page"> 
        ${header}
        <h1>Home</h1>
        <button id="toggle" className="toggle-signin">toggle signin</button>
      </div>
      `;
  },
  after_render: async () => {
    await Header.after_render();
    const btn = document.querySelector("#toggle");
    btn.addEventListener("click", () => {
      if (!store.isLoggedIn()) {
        store.signIn({
          name: "zach",
          email: "email@gmail.com",
        });
      } else {
        store.signOut();
      }
    });
  },
};
export default HomeScreen;
