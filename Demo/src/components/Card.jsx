import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ firstname, title, age, animal, onSave, listClick }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Form hook
  const [formValues, setFormValues] = useState({
    firstname,
    title,
    age,
    animal: animal,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChild = () => {
    onSave(formValues); // Calls the parent's function, sending form data to the parent
    setIsEditing(false); // Updates local state to exit editing mode
  };

  return (
    <div className="card">
      {isEditing ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formValues.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Animal:
            <input
              type="text"
              name="animal"
              value={formValues.animal}
              onChange={handleChange}
            />
          </label>
          {/* <button type="button" onClick={handleSaveChild}>
            Save
          </button> */}
          <Button type="button" text="Save" onClick={handleSaveChild} />
        </form>
      ) : (
        <>
          <p>Name: {firstname}</p>
          <p>Title: {title}</p>
          <p>Age: {age}</p>
          <p>Animal: {animal}</p>
          <Button text="Edit" type="button" onClick={handleEditClick} />
          <Button text="See more" variant="secondary" onClick={listClick} />
        </>
      )}
    </div>
  );
};

// Define PropTypes
Card.propTypes = {
  firstname: PropTypes.string.isRequired, // `text` must be a string and is required
  title: PropTypes.string.isRequired, // `text` must be a string and is required
  age: PropTypes.number.isRequired, // `text` must be a string and is required
  animal: PropTypes.string.isRequired, // `text` must be a string and is required
  onSave: PropTypes.func.isRequired, // `onClick` must be a function and is required
  // type: PropTypes.oneOf(["button", "submit", "reset"]), // `type` must be one of these values
  listClick: PropTypes.func.isRequired, // `onClick` must be a function and is required
  variant: PropTypes.string, // `variant` must be a string
};

// Define defaultProps (optional, for non-required props)
Card.defaultProps = {
  type: "button",
  variant: "primary",
};

export default Card;
