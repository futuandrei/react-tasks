import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import personsData from "../data/personsData";

const SinglePage = () => {
  //   console.log(params);
  const { id } = useParams();
  const person = personsData.find((person) => person.id === parseInt(id));
  const navigate = useNavigate();

  console.log(person);

  return (
    <div>
      <h2>Single Page for {person.firstname}</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Animal: {person.animal}</p>
      <Button text="Back to List" click={() => navigate(-1)} />
    </div>
  );
};

export default SinglePage;
