import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';


const PersonCard = props =>
{
    return (
        <Col xs='6' sm='4' lg='2' >
            <Card className-''>
                <CardBody>
                <CardTitle>
                    Character Name: {props.name}
                </CardTitle>
                <CardSubtitle>
                    Species: {props.species}
                </CardSubtitle>
                <CardText>
                    Gender: {props.gender}
                </CardText>
                <CardText>
                    Height: {props.height}
                </CardText>
                <CardText>
                    weight={props.weight}
                </CardText>
                <CardText>
                    Hair Color: {props.hairColor}
                </CardText>
                <CardText>
                    Homeworld: {props.home}
                </CardText>
                <CardText>
                    Birth Year: {props.birthday}
                </CardText>
                <CardText>
                    Films: {props.films}
                </CardText>
                <CardText>
                    Vehicles: {props.vehicles}
                </CardText>
                <CardText>
                    Ships: {props.ships}
                </CardText>
            </CardBody>
            </Card>
        </Col >
    );
};
export default PersonCard
