import "./button.css";

const Button = () => {
  let ID;

  return {
    render: async (innerText, id, type = "default") => {
      ID = id;
      return `
        <button type=${type} id="${id}" class="btn">
          ${innerText}
        </button>
      `;
    },
    after_render: async (
      classNames = [],
      variant = "btn-primary",
      size = "btn-md",
      e,
    ) => {
      const btn = document.getElementById(ID);
      btn.classList.add(variant, size, ...classNames);
      if (e) {
        btn.addEventListener(e.event, e.callback);
      }
    },
  };
};

export default Button;
