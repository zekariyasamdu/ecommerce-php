import SigninForm from "../components/signin-form/signin-form.js";

const SigninScreen = {
  const siginForm = SigninForm.render();
  render: async () => {
    return `
      <div class="signin-page"> 
        <h1>Signin</h1>
      ${siginForm}
      </div>
      `
  },
  after_render: async () => {

  },
};
export default SigninScreen;
