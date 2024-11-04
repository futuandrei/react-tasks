// function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     return (
//         <>
//             <button>Log in</button>
//             <header><h1>Persons Data</h1></header>
//             <main>
//                 {isLoggedIn ? personsData.map((person) => (
//                     <Card
//                         key={person.id}
//                         firstname={person.firstname}
//                         title={person.title}
//                         age={person.age}
//                         animal={person.animal}
//                     />
//                 )) : <p>Please log</p>
//       </main>
//         </>
//     );
// };

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <button>Log in</button>
            <header><h1>Persons Data</h1></header>
            <main>
                {isLoggedIn ?
                    <div>
                        {personsData.map((person) => (

                            <Card
                                key={person.id}
                                firstname={person.firstname}
                                title={person.title}
                                age={person.age}
                                animal={person.animal}
                            />
                        ))}

                    </div>
        
                ) : !isLoggedIn }


            </main>
        </>
    );
}
