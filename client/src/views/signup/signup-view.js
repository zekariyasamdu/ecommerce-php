import './signup-view.css'
import SignupForm from '../../components/signup-form/signup-form.js';
import AuthHero from '../../components/AuthHero/AuthHero.js';

const SignupScreen = {
  render: async () => {
    const signupForm = await SignupForm.render();
    const authHero = await AuthHero.render();

    return `
      <div class="split-auth-wrapper">
        <div class="auth-split-visual">
          ${authHero}
        </div>
        
        <div class="auth-split-content">
          <div class="auth-form-container">
            <div class="signup-header">
              <h1 class="signup-title">Join Zeus</h1>
              <p class="signup-subtitle">Create an account to explore premium collections and track details</p>
            </div>
            ${signupForm}
          </div>
        </div>
      </div>
    `;
  },
  after_render: async () => {
    await AuthHero.after_render();
    await SignupForm.after_render();
  },
};

export default SignupScreen;
