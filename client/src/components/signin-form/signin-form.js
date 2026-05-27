import "./signin-form.css";
import { signin } from "../../auth.js";

const SigninForm = {
  render: async () => {
    return `
      <form id="signin-form">
      <input id="email" placeholder="email" type="email" required/>
      <input id="password" placeholder="password" type="password" required/>
      <button type="submit" >Sign in</button>
      <p>Don't have an account</p>
      <a href="#/signup"> don't have an account signup</a>
      </form>
      `;
  },
  after_render: async () => {
    const form = document.querySelector("#signin-form");
    const emailHTMl = document.querySelector("#email");
    const passwordHTML = document.querySelector("#password");

    form.addEventListener("submit", async (e) => {
      const email = emailHTMl.value;
      const password = passwordHTML.value;
      await signin(email, password);
    });
  },
};

export default SigninForm;
