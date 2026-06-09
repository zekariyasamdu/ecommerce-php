import "./signin-view.css";
import SigninForm from "../../components/signin-form/signin-form.js";
import AuthHero from "../../components/auth-hero/auth-hero.js";

function SigninScreen() {
  return {
    before_render: () => `<div>loading...</div>`,

    render: async () => {
      const authHero = await AuthHero.render();
      const signupForm = await SigninForm.render();
      return `
        <div class="split-auth-wrapper">
          <div class="auth-split-visual">
            ${authHero}
          </div>

          <div class="auth-split-content">
            <div class="auth-form-container">
              <div class="signup-header">
                <h1 class="signup-title">Join Zeus</h1>
                <p class="signup-subtitle">
                  Create an account to explore premium collections and track details
                </p>
              </div>

              ${signupForm}
            </div>
          </div>
        </div>
      `;
    },

    after_render: async () => {
      await AuthHero.after_render();
      await SigninForm.after_render();
    },
  };
}
export default SigninScreen;
