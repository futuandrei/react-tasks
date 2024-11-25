import { useState } from 'react';
import Button from './Button';

const Card = ({ firstname, title, age, animal, click }) => {
  const [animalValue, setAnimalValue] = useState(animal); // Hook: stores animal value allowing to be updated in edit mode.
  const [isEditing, setIsEditing] = useState(false); // Hook: Checking if editing

  // Previous state... Not used at the moment!
  const toggleEditing = () => {
    setIsEditing((prevState) => !prevState);
  }; 

  // Form hook
  const [formData, setFormData] = useState({
    title: {title},
    age: {age},
    animal: {animal}
  });


  // Toggle between edit and save mode
  const handleEditClick = () => {
    if (isEditing) {
      // Save the edited value
      click(animalValue); // Optionally call the click function with the updated value
    }
    setIsEditing(!isEditing);
  };

  // Handle changes in the input field
  // const handleChange = (event) => {
  //   setAnimalValue(event.target.value);
  // };

  // Form handling
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prevState) => ({...prevState, [name]:{value}}))
}

  return (
    <div className="card">
      <p>Name: {firstname}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Animal:{" "}
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
    // <div className="card">
    //   <form>
    //     <p>Name: {firstname}</p>
    //     <input name="title" value={title} onChange={handleChange}/>
    //     <input name="age" value={age} onChange={handleChange}/>
    //     <input name="animal" value={animal} onChange={handleChange}/>
    //     {/* <input name="department" value={formData.department} onChange={handleChange}/>
    //     <input name="location" value={formData.location} onChange={handleChange}/> */}
    //     <Button text={isEditing ? "Save" : "Edit"} click={handleEditClick} />
    //   </form>
    // </div>
  );
};

export default Card;