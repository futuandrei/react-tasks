const Card = (props) => {
    return (
      <div className="card">
        <p> Name: {props.firstname}</p>
        <p> Title: {props.title}</p>
        <p>Age: {props.age}</p>
        <p>Animal: {props.animal}</p>
        <button>Promote</button>
      </div>
    );
  };
  
  export default Card;