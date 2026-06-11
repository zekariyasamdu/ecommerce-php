import Header from "../../components/header/header.js";

function CartScreen() {
  const header = Header();

  return {
    before_render: () => `<div>loading...</div>`,

    render: async () => {
      return `
        <div>
          ${await header.render()}
        </div>
      `;
    },

    after_render: async () => {
      await header.after_render();
    },

    unMount: () => {
      header.unMount();
    },
  };
}

export default CartScreen;
