const SigninForm = {
  render: async () => {
    return `
      <form id="signin">
      <input required/>
      <input required/>
      <button type="submit" ></button>
      </form>
      `;
  },
  after_render: async () => {},
};

export default SigninForm;
