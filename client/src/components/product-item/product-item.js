import "./product-item.css";

const ProductItem = {
  render: async (product) => {
    return `
      <div class="product-item-card"> 
        ${product.name}
      </div>
      `;
  },
  after_render: async () => {},
};
export default ProductItem;
