import Button from "../ui/button/button.js";
import "./signup-form.css";
//import { signup } from "../../auth.js";
const signupBtn = Button();

const SignupForm = {
  render: async () => {
    return `
      <form id="signup-form" class="auth-form">
        <div class="input-group">
          <label for="signup-email" class="field-label">Email Address</label>
          <input id="signup-email" class="form-input" placeholder="name@example.com" type="email" required autocomplete="email"/>
        </div>
        
        <div class="input-group">
          <label for="signup-password" class="field-label">Create Password</label>
          <input id="signup-password" class="form-input" placeholder="••••••••" type="password" required autocomplete="new-password"/>
        </div>
        
        ${await signupBtn.render("signup", "signupBtn", "submit")}
        <div class="form-footer">
          <p class="footer-text">Already have an account? <a href="#/signin" class="footer-link">Sign in</a></p>
        </div>
      </form>
    `;
  },
  after_render: async () => {
    const form = document.querySelector("#signup-form");
    const emailHTML = document.querySelector("#signup-email");
    const passwordHTML = document.querySelector("#signup-password");

    signupBtn.after_render();
    /* form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Keeps operations strictly inside the SPA routing box
      const email = emailHTML.value;
      const password = passwordHTML.value;

      if (typeof signup === "function") {
        await signup(email, password);
      } else {
        console.log("Signup triggered with details:", { email, password });
      }
    }); */
  },
};

export default SignupForm;
