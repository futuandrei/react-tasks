import "./Button.css";

const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
