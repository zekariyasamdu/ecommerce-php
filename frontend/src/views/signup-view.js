import SignupForm from "../components/signup-form/signup-form.js";

const SignupScreen = {
  render: async () => {
    const sigupForm = await SignupForm.render();
    return `
      <div class="signup-page"> 
        <h1>Signup</h1>
        ${sigupForm}
      </div>
      `;
  },
  after_render: async () => {
    await SignupForm.after_render();
  },
};

export default SignupScreen;
