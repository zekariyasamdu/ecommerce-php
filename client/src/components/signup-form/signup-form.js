import "./signup-form.css";

const SignupForm = {
  render: async () => {
    return `
      <form id="signup">
      <input placeholder="email" type="email" required/>
      <input placeholder="password" type="password" required/>
      <button type="submit" >Sign up</button>

      <a href="#/signin"> already have an account?</a>
      </form>
      `;
  },
  after_render: async () => {},
};

export default SignupForm;
