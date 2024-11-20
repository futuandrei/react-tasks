import personsData from '../data/personsData'
import Card from '../components/Card'

const List = () => {

    const isLoggedInd = true; 

    return (
        <div className='card-container'>
            {isLoggedInd ? (
                personsData.map((person)=> (
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
        </div>

    )
};

export default List;