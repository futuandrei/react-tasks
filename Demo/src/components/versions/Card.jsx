import Button from '../components/Button';

const Card = ({firstname,title,age,animal,click}) => {
    return (
      <div className="card">
        <p> Name: {firstname}</p>
        <p> Title: {title}</p>
        <p>Age: {age}</p>
        <p>Animal: {animal}</p>
        <Button text="Edit" click={click} />
      </div>
    );
  };
  
  export default Card;