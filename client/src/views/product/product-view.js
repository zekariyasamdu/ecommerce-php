import "./product-view.css";
import Header from "../../components/header/header.js";
import Promotion from "../../components/promotion/promotion.js";
import ProductItem from "../../components/product-item/product-item.js";

const ProductScreen = {
  render: async () => {
    const header = await Header.render();
    const promotion = await Promotion.render();
    const productItems = await Promise.all(
      Array.from({ length: 10 }, (_, i) => ProductItem.render({ name: i })),
    );

    return `
      <div class="product-layout"> 
        ${header}
        ${promotion}
        <div class="product-container">
          ${productItems.join("")}
        </div>
      </div>
    `;
  },
  after_render: async () => {
    await Header.after_render();
  },
};
export default ProductScreen;
