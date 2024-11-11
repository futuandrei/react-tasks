import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./Card'
import personsData from './data/personsData'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Added toggle login
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <>
    <header>
      {/* Toggle button for demonstration */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </header>
    <main>
      
      {/* Conditional rendering based on isLoggedIn state */}
      {isLoggedIn ? (
        personsData.map((person) => (
          <Card
            key={person.id}
            firstname={person.firstName}
            title={person.title}
            age={person.age}
            animal={person.animal}
          />
        ))
      ) : (
        <p>Please log in to view the cards.</p>
      )}
    </main>
    </>
  );
}

  // function App() {
  //   const [person, setPerson] = useState({firstname:"Sam", title:"Developer", age:25, animal: 'Hedgehog'});
    
  //   {console.log(personsData);}
  //   return (
  //     <div class="card-container">
  //       <div>
  //         <p>Firstname: {person.firstname}</p>
  //         <p>Title: {person.title}</p>
  //         <p>Age: {person.age}</p>
  //         <p>Favorite animal: {person.animal}</p>
  //        </div>
  //     </div>
  
  //   )}

  // return (
  //   <div className="card-container">
  //     <div>
  //       <header>Logo</header>
  //     </div>
  //     <Card firstname="Andrei" title="developer" age="40"/>
  //     <Card firstname="Sara" title="CEO" age="15"/>
  //     <Card firstname="Isla" title="developer" age="10"/>
  //     <Card firstname="Taru" title="Advisor" age="30"/>
  //     <Card firstname="Tarja" title="Sr.Advisor" age="50"/>
  //   </div>
  // );
// };

export default App
