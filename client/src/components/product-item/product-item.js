import "./product-item.css";

const ProductItem = {
  render: async (product) => {
    return `
      <div class="product-item-card">
        <div class="product-image-wrapper"
          style="background-image: url('${product.image}');">
          <p class="like-btn"><i class="ti ti-heart">like</i></p>
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">${product.price}$</p>
          <div class="card-actions">
            <button class="product-action">More</button>
            <button class="add-btn">Add</button>
          </div>
        </div>
      </div>
    `;
  },
  after_render: async () => {},
};

export default ProductItem;
