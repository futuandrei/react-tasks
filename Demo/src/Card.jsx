const Card = ({firstname,title,age,animal}) => {
    return (
      <div className="card">
        <p> Name: {firstname}</p>
        <p> Title: {title}</p>
        <p>Age: {age}</p>
        <p>Animal: {animal}</p>
        <button>Promote</button>
      </div>
    );
  };
  
  export default Card;