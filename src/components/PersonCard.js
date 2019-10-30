import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';



const PersonList = () => {
  const [people, setPeople] = useState([])


   useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {

        const personInfo = res.data;
        setPeople(personInfo);
        console.log('Star Wars API Person', personInfo);
      })
      .catch(err => {
        console.log('The data was not returmed', err);
      });
  }, []);

  return (
    <Container>
      <Row>
        {person.map((setPeople) => {
          return (
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
          );
        })}
      </Row>
    </Container>
  );
}
export default PersonList
