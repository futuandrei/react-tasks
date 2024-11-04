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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <main>
            {/* Toggle button for demonstration */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>

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
    );
}
