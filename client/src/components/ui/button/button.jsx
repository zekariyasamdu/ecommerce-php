import "./button.css";

const Button = ({
  children,
  id,
  type = "button",
  variant = "btn-primary",
  size = "btn-md",
  className = "",
  ...props
}) => {
  const classNames = ["btn", variant, size, className].filter(Boolean).join(" ");

  return (
    <button type={type} id={id} className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
