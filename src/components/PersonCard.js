import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Col} from 'reactstrap';

const PersonCard = ( { props, loading }) =>
{
  if(loading) {
    return<h2>Loading...</h2>
  }
  console.log(props);
  return (
    <Container className="person-wrapper">
          <Col xs="6" sm="4" lg="2" key={props.name}>
            <Card className="perso-card">
              console.log(props.name);
              <CardBody>
                <CardTitle>Character Name: {props.name}</CardTitle>
                <CardSubtitle>Species: {props.species}</CardSubtitle>
                <CardText>Gender: {props.gender}</CardText>
                <CardText>Height: {props.height}</CardText>
                <CardText>weight: {props.weight}</CardText>
                <CardText>Hair Color: {props.hairColor}</CardText>
                <CardText>Homeworld: {props.home}</CardText>
                <CardText>Birth Year: {props.birthday}</CardText>
                <CardText>Films: {props.films}</CardText>
                <CardText>Vehicles: {props.vehicles}</CardText>
                <CardText>Ships: {props.ships}</CardText>
              </CardBody>
            </Card>
          </Col>
    </Container>
  );
}
