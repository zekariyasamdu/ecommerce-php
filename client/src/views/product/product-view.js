import "./product-view.css";
import Header from "../../components/header/header.js";
import Promotion from "../../components/promotion/promotion.js";
import ProductItem from "../../components/product-item/product-item.js";
import Search from "../../components/search/search.js";
import { QUERY } from "../../services/product-services.js";

function ProductScreen() {
  let actions = [];

  const header = Header();
  const promotion = Promotion();
  const search = Search();

  return {
    before_render: async () => `
        <div class="product-layout">
          ${await header.render()}
          <div class="product-container">
            <i data-lucide="loader"></i>
          </div>
        </div>
      `,
    render: async () => {
      const data = await QUERY.getProducts();

      const productItems = await Promise.all(
        data.map((item) => {
          actions.push(() => ProductItem.after_render(item));
          return ProductItem.render(item);
        }),
      );

      return `
        <div class="product-layout">
          ${await header.render()}
          ${await promotion.render()}
          ${await search.render()}
          <div class="product-container">
            ${productItems.join("")}
          </div>
        </div>
      `;
    },
    after_render: async () => {
      await header.after_render();
      await promotion.after_render();
      await search.after_render();
      await Promise.all(actions.map((cb) => cb()));
    },
  };
}

export default ProductScreen;
