import "./product-view.css";
import Header from "../../components/header/header.js";

const ProductScreen = {
  render: async () => {
    const header = await Header.render();
    const promotion;
    return `
      <div class="home-page"> 
        ${header}
        <h1>Home</h1>
      </div>
      `;
  },
  after_render: async () => {
    await Header.after_render();
  },
};
export default ProductScreen;
