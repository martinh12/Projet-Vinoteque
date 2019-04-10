import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AdminForm.css';

export default class AdminForm extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="adminMainTitle">
          <h1>Espace administration</h1><br />
          <img src="https://image.noelshack.com/fichiers/2019/15/3/1554909236-ed2e991ac462db51e226b4ebff1879.jpg" alt="bouteilleVin"></img>

        </div>

        <Form>

          <FormGroup row>
            <Label for="wineName" sm={4}>Nom du vin</Label>
            <Col sm={8}>
              <Input type="text" name="winename" id="winename" placeholder="ex : Château d'Arcins 2014" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="productorName" sm={4}>Nom du producteur</Label>
            <Col sm={8}>
              <Input type="text" name="productorname" id="productorname" placeholder="ex : Chapoutier Michel" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="productorWebsite" sm={4}>Site du producteur</Label>
            <Col sm={8}>
              <Input type="text" name="productorWebsite" id="productorwebsite" placeholder="ex : www.chapoutier-vignobles.fr" />
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="colorWine" sm={4} >Robe du vin</Label>
            <Col sm={8}>
              <Input type="select" name="colorwine" id="colorwine">
                <option>Rouge</option>
                <option>Blanc</option>
                <option>Rosé</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="typeWine" sm={4} >Type de vin</Label>
            <Col sm={8}>
              <Input type="select" name="typewine" id="typewine">
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
              <Input type="textarea" name="winedescription" id="winedescription" placeholder="Ajoutez ici le descriptif de votre vin." />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="winePicture" sm={4}>Image</Label>
            <Col sm={8}>
              <Input type="file" name="winepicture" id="winepicture" />
              <FormText color="muted">
                Ajouter ici l'image/photo de votre vin.
            </FormText>
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