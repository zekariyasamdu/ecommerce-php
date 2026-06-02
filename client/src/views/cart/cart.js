import Header from "../../components/header/header.js";

const CartScreen = {
  render: async () => {
    const header = await Header.render();

    return `
      <div > 
        ${header}
      </div>
    `;
  },
  after_render: async () => {
    await Header.after_render();
  },
};

export default CartScreen;
