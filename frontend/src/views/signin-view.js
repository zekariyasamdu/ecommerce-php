const SigninScreen = {
  render: async () => {
    return `<div class="signin">
      <h1>Sigin</h1>
      <a href="#/">Home</a><br/>
      <a href="#/products/1">products</a>
      </div>`;
  },
  after_render: async () => {
    const signin = document.querySelector(".signin");
    // signin.addEventListener("click", () => {
    //   alert(`clicked`);
    // });
  },
};

export default SigninScreen;
