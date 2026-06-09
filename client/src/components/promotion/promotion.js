import "./promotion.css";

function Promotion() {
  return {
    before_render: () => "",

    render: async () => {
      return `
        <div class="promotion-card">
        </div>
      `;
    },

    after_render: async () => {},
  };
}

export default Promotion;
