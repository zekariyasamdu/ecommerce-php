import Header from "../components/header/header.js";

const ProductScreen = {
  render: async () => {
    const header = await Header.render();
    return `
      <div class="product-page"> 
      ${header}
        <h1>Product</h1>
      </div>
      `;
  },
  after_render: async () => {
    await Header.after_render();
  },
};
export default ProductScreen;
