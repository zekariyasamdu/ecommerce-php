import Header from "../components/header/header.js";

const SigninScreen = {
  render: async () => {
    const header = await Header.render();
    return `
      <div class="signin-page"> 
      ${header}
        <h1>Signin</h1>
      </div>
      `;
  },
  after_render: async () => {
    await Header.after_render();
  },
};
export default SigninScreen;
