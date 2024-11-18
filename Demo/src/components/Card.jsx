import { useState } from 'react';
import Button from '../components/Button';

const Card = ({ firstname, title, age, animal, click }) => {
  const [animalValue, setAnimalValue] = useState(animal); // Hook: stores animal value allowing to be updated in edit mode.
  const [isEditing, setIsEditing] = useState(false); // Hook: Checking 

  // Previous state
  const toggleEditing = () => {
    setIsEditing((prevState) => !prevState);
  }; 

  // Toggle between edit and save mode
  const handleEditClick = () => {
    if (isEditing) {
      // Save the edited value
      click(animalValue); // Optionally call the click function with the updated value
    }
    setIsEditing(!isEditing);
  };

  // Handle changes in the input field
  const handleChange = (event) => {
    setAnimalValue(event.target.value);
  };

  return (
    <div className="card">
      <p>Name: {firstname}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>
        Animal:{" "}
        {isEditing ? (
          <input
            type="text"
            value={animalValue}
            onChange={handleChange}
          />
        ) : (
          animalValue
        )}
      </p>
      <Button text={isEditing ? "Save" : "Edit"} click={handleEditClick} />
    </div>
  );
};

export default Card;