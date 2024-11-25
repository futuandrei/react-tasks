import { useState } from "react";
import Button from "./Button";

const Card = ({ firstname, title, age, animal, onSave, onClick }) => {
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
          <Button text="See more" variant="secondary" onClick={onClick} />
        </>
      )}
    </div>
  );
};

export default Card;
