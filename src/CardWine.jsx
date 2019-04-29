import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CardWine.css'


const CardWine = props => (

    <Container className="CardWine">
        <Row className="wine">
            <Col lg="5" className="imgLeft">
                <img src={props.vin.image} alt="" />
            </Col>
            <Col lg="7" className="text-center textRight">
                <h2 className="titleWine">
                    {props.vin.title}
                </h2>
                <div className="linkProducer">
                    <a href={props.vin.link} > {props.vin.nameLink}</a>
                </div>
                <div className="budget">
                    <p>{props.vin.budget}€</p>
                </div>
                <div className="description">
                    <p>{props.vin.description}</p>
                </div>
                
            </Col>
        </Row>
    </Container>
)


export default CardWine;