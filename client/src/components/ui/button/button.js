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
      id = null,
      action,
    ) => {
      const btn = document.getElementById(ID ?? id);
      btn.classList.add(variant, size, ...classNames);
      if (action) {
        btn.addEventListener(action.event, action.callback);
      }
    },
  };
};

export default Button;
