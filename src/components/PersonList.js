import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';

const PersonList = () =>
{

  const [people, setPeople] = useState([]);

  useEffect(() =>
  {
    axios

      .get(`https://swapi.co/api/people/1/?format=api`)

      .then(response =>
      {
        const personInfo = response.data;
        // eslint-disable-next-line no-undef
        console.log(Person, personInfo);
        setPeople(personInfo);
      })
      .catch(error =>
      {
        console.log('The data was not reaturned', error);
      });
  }, []);

  return (
    <>
      <Row>
        {people.map}
      </Row>
    </>
  )
}

export default PersonList
