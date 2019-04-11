import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ImageUploadComponent from './ImageUploadComponent.jsx'
import './AdminForm.css';


export default class AdminForm extends React.Component {
  render() {
    return (
      <div className="AdminForm container">

        <div className="adminMainTitle">
          <h1>Espace administration</h1><br />
          <ImageUploadComponent />
        </div>

        <Form className="formAdmin">

          <FormGroup row>
            <Label for="wineName" sm={4}>Nom du vin</Label>
            <Col sm={8}>
              <Input type="text" name="wineName" id="wineName" placeholder="ex : Château d'Arcins 2014" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="productorName" sm={4}>Nom du producteur</Label>
            <Col sm={8}>
              <Input type="text" name="productorName" id="productorName" placeholder="ex : Chapoutier Michel" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="productorWebsite" sm={4}>Site du producteur</Label>
            <Col sm={8}>
              <Input type="text" name="productorWebsite" id="productorWebsite" placeholder="ex : www.chapoutier-vignobles.fr" />
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="colorWine" sm={4} >Robe du vin</Label>
            <Col sm={8}>
              <Input type="select" name="colorWine" id="colorWine">
                <option>Rouge</option>
                <option>Blanc</option>
                <option>Rosé</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="typeWine" sm={4} >Type de vin</Label>
            <Col sm={8}>
              <Input type="select" name="typeWine" id="typeWine">
                <option>Fruité</option>
                <option>Moelleux</option>
                <option>Tannique</option>
                <option>Sec</option>
                <option>Boisé</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="wineDescription" sm={4}>Descriptif du vin</Label>
            <Col sm={8}>
              <Input type="textarea" name="wineDescription" id="wineDescription" placeholder="Ajoutez ici le descriptif de votre vin." />
            </Col>
          </FormGroup>


          <FormGroup check row>
            <Col sm={{ size: 10, offset: 4 }}>
              <Button>Ajouter la fiche</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}