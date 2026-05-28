import "./product-view.css";
import Header from "../../components/header/header.js";
import Promotion from "../../components/promotion/promotion.js";
import ProductItem from "../../components/product-item/product-item.js";
import { QUERY } from "../../services/product-services.js";
import Search from "../../components/search/promotion.js";

const ProductScreen = {
  render: async () => {
    const header = await Header.render();
    const promotion = await Promotion.render();
    const search = await Search.render();
    const data = await QUERY.getProducts();
    const productItems = await Promise.all(
      data.map((item) => ProductItem.render(item)),
    );

    return `
      <div class="product-layout"> 
        ${header}
        ${promotion}
        ${search}
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
