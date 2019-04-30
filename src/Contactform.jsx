import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Contactform.css'



class Contactform extends Component {
    render() {
        return (
            <Container className="ContactForm">
                <Row className="band">
                    <Col sm="5" className="imgLeft">
                        <img src="imageContact.jpg" alt="imgContact" />
                    </Col>
                    <Col sm="5" className="form textRight">
                        <h1>Contactez-nous</h1>
                        <Form>
                            <FormGroup row>
                                <Label for="Name" sm={2}>Nom</Label>
                                <Col sm={10}>
                                    <Input type="text" name='name' id="Name" placeholder="Votre nom*" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="Email" placeholder=" Votre e-mail*" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="objet" sm={2}>Objet</Label>
                                <Col sm={10}>
                                    <Input type="select" name="objet" id="objet">
                                        <option>Demande de renseignements</option>
                                        <option>Demande de partenariat</option>
                                        <option>Autre</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Text" sm={2}>Votre message</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="Text" placeholder="Votre message*" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 5 }}>
                                    <Button>Envoyer</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default Contactform;

