import React from 'react';
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const PersonList = (props) =>
{
  return (
    <Col xs="6" sm="4" lg='4' className='card-wrapper'>
      <Card className='person-card'>
        <CardTitle Style='bold' fontSize='25pt'>Character Name:{props.name}</CardTitle>
        <CardBody>
          <CardText>Birth Year: {props.birthYear}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Height: {props.height}</CardText>
          <CardText>weight: {props.weight}</CardText>
          <CardText>Hair Color: {props.hairColor}</CardText>
        </CardBody>
      </Card>
    </Col>
  );

}

export default PersonList
