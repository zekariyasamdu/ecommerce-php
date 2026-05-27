import SigninForm from "../../components/signin-form/signin-form.js";

const SigninScreen = {
  render: async () => {
    const siginForm = await SigninForm.render();
    return `
      <div class="signin-page"> 
        <h1>Signin</h1>
        ${siginForm}
      </div>
      `;
  },
  after_render: async () => {
    await SigninForm.after_render();
  },
};
export default SigninScreen;
