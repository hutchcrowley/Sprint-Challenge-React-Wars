import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import PersonList from './PersonList';

const PersonCard = () =>
{

  const [people, setPeople] = useState([]);

  useEffect(() =>
  {
    axios
      .get(`https://swapi.co/api/people/`)

      .then(response =>
      {
        console.log(response)
        const personInfo = response.data.results;
        console.log(personInfo);
        setPeople(personInfo);
      })
      .catch(error =>
      {
        console.log('The data was not reaturned', error);
      });
  }, []);
  console.log(people)

  return (
    <>
      <Container>
        <Row>
          {people.map(person =>
          {
            return (
              <PersonList key={person.name}
                name={person.name}
                birthYear={person.birth_year}
                gender={person.gender}
                hairColor={person.hair_color}
                height={person.height}
                weight={person.mass}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );

}


export default PersonCard