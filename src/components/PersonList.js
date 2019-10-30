import React from 'react'
import PersonCard from './PersonCard'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const PersonList = (props) => {
  return (
    <PersonCard>
      <Card>
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
    </PersonCard>
  )
}

export default PersonList
