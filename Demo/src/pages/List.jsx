import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import personsData from "../data/personsData";
import Card from "../components/Card";

const List = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); // Added on Wednesday 27.11
  const [isLoading, setIsLoading] = useState(true);
  // const isLoggedInd = true; // Not needed.
  // Manage card data state (initially set to personsData)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  // handleSave is the function defined in the parent. It updates parent data when called. (Different than the one in Card.jsx)
  // This function updates the parent’s state when a child (Card) saves its data.
  const handleSave = (id, updatedData) => {
    // Update the corresponding person's data
    const updatedPersonsData = data.map((person) =>
      person.id === id ? { ...person, ...updatedData } : person
    );

    setData(updatedPersonsData); // Update state
    console.log("Updated data:", updatedPersonsData); // Debugging
  };

  // Handles navigation
  const handleNavigate = (id) => {
    console.log(id);
    navigate(`${id}`);
  };

  // console.log(data);

  return (
    <div className="card-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((person) => (
          // iterates through data and creates new Card component for each person in the array.
          <Card
            key={person.id}
            firstname={person.firstname}
            title={person.title}
            age={person.age}
            animal={person.animal}
            // onSave is a prop, passed to the child. Function is defined in Parent as part of handleSave method.
            // onSave prop is a function that captures updates from the Card and sends them to the parent.
            // Parent's handleSave updates the corresponding data entry (person.id) in the state.
            onSave={(updatedData) => handleSave(person.id, updatedData)} // The onSave prop essentially “wraps” handleSave and passes the person.id along with updatedData.
            // calls handleSave, sending person.id and updatedData to update the parent’s state.
            listClick={() => handleNavigate(person.id)}
          />
        ))
      )}
    </div>
  );
};

export default List;
