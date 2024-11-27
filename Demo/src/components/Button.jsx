import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

// Define PropTypes
Button.propTypes = {
  text: PropTypes.string.isRequired, // `text` must be a string and is required
  onClick: PropTypes.func.isRequired, // `onClick` must be a function and is required
  type: PropTypes.oneOf(["button", "submit", "reset"]), // `type` must be one of these values
  variant: PropTypes.string, // `variant` must be a string
};

// Define defaultProps (optional, for non-required props)
Button.defaultProps = {
  type: "button",
  variant: "primary",
};

export default Button;
