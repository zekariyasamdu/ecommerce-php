import "./signin-form.css";
import { signin } from "../../auth.js";
import Button from "../ui/button/button.js";

const signinBtn = Button();

const SigninForm = {
  render: async () => {
    return `
      <form id="signin-form" class="auth-form">
        <div class="input-group">
          <label for="email" class="field-label">Email Address</label>
          <input id="email" class="form-input" placeholder="name@example.com" type="email" required autocomplete="email"/>
        </div>
        
        <div class="input-group">
          <label for="password" class="field-label">Password</label>
          <input id="password" class="form-input" placeholder="••••••••" type="password" required autocomplete="current-password"/>
        </div>
        
        ${await signinBtn.render("signin", "signinBtn", "submit")}
        <div class="form-footer">
          <p class="footer-text">Don't have an account? <a href="#/signup" class="footer-link">Sign up</a></p>
        </div>
      </form>
    `;
  },
  after_render: async () => {
    const form = document.querySelector("#signin-form");
    const emailHTML = document.querySelector("#email");
    const passwordHTML = document.querySelector("#password");
    signinBtn.after_render();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = emailHTML.value;
      const password = passwordHTML.value;
      await signin(email, password);
    });
  },
};

export default SigninForm;
