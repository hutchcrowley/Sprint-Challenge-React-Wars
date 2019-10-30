import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';

PersonList = () =>
{
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/1/`)
            .then(res => setPeople(res.data))
            console.log(res.data)
            .catch(err =>
            {
                'The API data was not returned', err;
            }, []);

        return(
        <Container>
            <Row
                {people.map(person) => {
                    <PersonCard
                        name={person.name}
                        height={person.height}
                        weight={person.mass}
                        hairColor={person.hair_color}
                        birthday={person.birth_year}
                        gender={person.gender}
                        home={person.homeworld}
                        species={person.species}
                        films={person.films}
                        vehicles={person.vehicles}
                        ships={person.starships}
                         />
                })
                }

        </Container>
    }
}


export default PersonList
