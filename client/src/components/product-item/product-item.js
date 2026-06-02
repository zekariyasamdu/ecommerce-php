import Card from "../ui/card/card.js";
import "./product-item.css";

const ProductItem = {
  render: async (product) => {
    const ItemCard = Card();
    const val = await ItemCard.render(
      `
        <div class="product-image-wrapper"
          style="background-image: url('${product.image}');">
          <p class="like-btn"><i data-lucide="heart"></i></p>
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">${product.price}$</p>
        </div>
          <div class="card-actions">
            <button class="btn btn-md btn-outline">More</button>
            <button class="btn btn-md btn-primary">Add</button>
          </div>
      `,
      product.id,
    );
    return val;
  },
  after_render: async (item) => {
    const ItemCard = Card();
    await ItemCard.after_render(["product-item-card"], item.id);
  },
};

export default ProductItem;
