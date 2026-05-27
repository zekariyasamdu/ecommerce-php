import './signin-view.css'
import SigninForm from "../../components/signin-form/signin-form.js";
import AuthHero from '../../components/AuthHero/AuthHero.js';

const SigninScreen = {
  render: async () => {
    const signinForm = await SigninForm.render();
    const authHero = await AuthHero.render()
    return `
      <div class="split-auth-wrapper">
        <div class="auth-split-visual">
          ${authHero}
        </div>
        
        <div class="auth-split-content">
          <div class="auth-form-container">
            <div class="signin-header">
              <h1 class="signin-title">Access Zeus</h1>
              <p class="signin-subtitle">Enter your email and credentials to manage your orders</p>
            </div>
            ${signinForm}
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
export default SigninScreen;
