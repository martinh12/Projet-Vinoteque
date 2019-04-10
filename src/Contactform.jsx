import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Contactform.css'



class Contactform extends Component {
    render (){
        return (
            <div className="container contactForm">
                <div className = 'row'>
                    <div className="col-md-3" >
                        </div>
                    <div className="col-12 col-md-6" > 
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="Name" sm={2}>Nom</Label>
                                <Col sm={10}>
                                    <Input type="text" name='name' id="Name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="Email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="Email" placeholder="@" />
                                </Col>
                                </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="objet" sm={2}>Objet</Label>
                                <Col sm={10}>
                                    <Input type="select" name="objet" id="objet">
                                        <option>Demande de partenariat</option>
                                        <option>Demande de renseignements</option>
                                        <option>Producteur Bordelais, je veux intégrer mon vin au site</option>
                                        <option>Autre</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label fhtmlFor="Text" sm={2}>Votre message</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="Text" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Contactform;

