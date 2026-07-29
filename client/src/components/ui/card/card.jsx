import "./card.css";

const Card = ({ children, id, className = "", ...props }) => {
  const classNames = ["card", className].filter(Boolean).join(" ");

  return (
    <div id={id} className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Card;
