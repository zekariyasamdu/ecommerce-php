const HomeScreen = {
  render: async () => {
    return `<div class="home-page"> 
      <h1>Home</h1>
      <a href="#/signin">signin</a><br/>
      <a href="#/products/1">products</a>
      </div>
      `;
  },
  after_render: async () => {
    const home = document.querySelector(".home-page");
    // home.addEventListener("click", () => {
    //   alert(`clicked`);
    // });
  },
};
export default HomeScreen;
