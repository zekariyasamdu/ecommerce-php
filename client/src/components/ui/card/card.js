import "./card.css";

const Card = () => {
  let ID;

  return {
    render: async (innerText, id) => {
      ID = id;
      return `
        <div id="${id}" class="card">
          ${innerText}
        </div>
      `;
    },
    after_render: async (classNames = [], id, action) => {
      const card = document.getElementById(ID ?? id);
      card.classList.add(...classNames);
      if (action) {
        btn.addEventListener(action.event, action.callback);
      }
    },
  };
};

export default Card;
