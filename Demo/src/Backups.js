function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <button>Log in</button>
            <header><h1>Persons Data</h1></header>
            <main>
                {personsData.map((person) => (

                    <Card
                        key={person.id}
                        firstname={person.firstname}
                        title={person.title}
                        age={person.age}
                        animal={person.animal}
                    />
                ))}

            </main>
        </>
    );
}
