import React from 'react';
import gvft from "./trads"
import { Container, Row, Col } from 'reactstrap';
import './CardWine.css'


const CardWine =props => (

    <Container className="CardWine">
        <Row className="wine">
            <Col lg="5" className="imgLeftCardWine">
                <img src={props.vin.image} alt="" />
            </Col>
            <Col lg="7" className="wineSpecs">
                <h2 className="titleWine">
                    {props.vin.title}
                </h2>
                <div className="wineDress">
                    <p>{gvft(props.vin.wineDress)}</p>
                </div>
                <div className="budget">
                    <p>{props.vin.budget}€</p>
                </div>
                <div className="linkProducer">
                    <a href={props.vin.link} > {props.vin.nameLink}</a>
                </div>
               
                <div className="description">
                    <p>{props.vin.description}</p>
                </div>
                
            </Col>
        </Row>
    </Container>
)


export default CardWine;