const ProductScreen = {
  render: async () => {
    return `<div class="product">
      <h1>Product</h1>
      <a href="#/">Home</a><br/>
      <a href="#/signin">signin</a><br/>
      </div>`;
  },
  after_render: async (request) => {
    const product = document.querySelector(".product");
    // product.addEventListener("click", () => {
    //   alert(`clicked`);
    // });
  },
};
export default ProductScreen;
