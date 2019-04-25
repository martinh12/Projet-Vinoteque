import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import gvft from './trads';
import './AdminForm.css';



export default class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      nameLink: '',
      link: '',
      wineDress: 'red',
      dish: 'redMeat',
      budget: '',
      characteristics: '',
      bio: '0',
      description: '',
      image: 'https://via.placeholder.com/150'
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      fetch(`http://51.68.18.101:3002/vinoveritas/api/wines/${id}`)
        .then(res => res.json())
        .then(wine => {
          this.setState({
            ...wine,
          });
        });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    if (id) {
      this.updateWine(id);
    } else {
      this.postWine();
    }
  }

  postWine() {
    const url = 'http://51.68.18.101:3002/vinoveritas/api/wines/';
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };


    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`vin ajouté avec l'ID ${res}!`);
          this.props.history.push('/adminPage');
        }
      }).catch(e => {
        alert('Erreur lors de l\'ajout d\'un vin');
      });
  }

  updateWine(id) {
    const url = `http://51.68.18.101:3002/vinoveritas/api/wines/${id}`;
    const config = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch(url, config)
      .then(res => {
        if (res.ok) {
          alert(`vin modifié avec l'ID ${id}!`);
          this.props.history.push('/adminPage');
        } else {
          alert(res.error);
        }
      }).catch(e => {
        alert('Erreur lors de l\'ajout d\'un vin');
      });
  }




  render() {
    return (
      <div className="AdminForm container">

        <div className="adminMainTitle">
          <h1>Espace administration</h1><br />

        </div>
        <img src={this.state.image} alt='' className='imgVin' />

        <Form className="formAdmin" onSubmit={this.submitForm}>



          <FormGroup row>
            <Label for="title" sm={4}>Nom du vin</Label>
            <Col sm={8}>
              <Input type="text"
                name="title"
                id="title"
                placeholder="ex : Château d'Arcins 2014"
                onChange={this.onChange}
                value={this.state.title}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="nameLink" sm={4}>Nom du producteur</Label>
            <Col sm={8}>
              <Input type="text"
                name="nameLink"
                id="nameLink"
                placeholder="ex : Chapoutier Michel"
                onChange={this.onChange}
                value={this.state.nameLink}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="image" sm={4}>lien de l'image</Label>
            <Col sm={8}>
              <Input type="url"
                name="image"
                id="image"
                onChange={this.onChange}
                value={this.state.image}
              />
            </Col>
          </FormGroup>



          <FormGroup row>
            <Label for="link" sm={4}>Site du producteur</Label>
            <Col sm={8}>
              <Input type="text"
                name="link"
                id="link"
                placeholder="ex : www.chapoutier-vignobles.fr"
                onChange={this.onChange}
                value={this.state.link}
              />
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="wineDress" sm={4} >Robe du vin</Label>
            <Col sm={8}>
              <Input type="select"
                name="wineDress"
                id="wineDress"
                onChange={this.onChange}
                value={this.state.wineDress}
              >
                <option value='red'>Rouge</option>
                <option value='white'>Blanc</option>
                <option value='rose'>Rosé</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="dish" sm={4} >Plat</Label>
            <Col sm={8}>
              <Input type="select"
                name="dish"
                id="dish"
                onChange={this.onChange}
                value={this.state.dish}
              >
                <option value='redMeat'>{gvft('redMeat')}</option>
                <option value='whiteMeat'>{gvft('whiteMeat')}</option>
                <option value='seafood'>{gvft('seafood')}</option>
                <option value='delicatessen'>{gvft('delicatessen')}</option>
                <option value='cheese'>{gvft("cheese")}</option>
                <option value='afters'>{gvft('afters')}</option>
                <option value='vegan'>{gvft('vegan')}</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="budget" sm={4} >prix</Label>
            <Col sm={8}>
              <Input type="text"
                name="budget"
                id="budget"
                onChange={this.onChange}
                value={this.state.budget}
              />
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="characteristics" sm={4} >Type de vin</Label>
            <Col sm={8}>
              <Input type="select"
                name="characteristics"
                id="characteristics"
                onChange={this.onChange}
                value={this.state.characteristics}
              >
                <option value='fruity'>{gvft('fruity')}</option>
                <option value='wooded' >{gvft('wooded')}</option>
                <option value='tannic' >{gvft('tannic')}</option>
                <option value='dry'>{gvft('dry')}</option>
                <option value='mellow' >{gvft('mellow')}</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label for="bio" sm={4} >bio</Label>
            <Col sm={8}>
              <Input type="select"
                name="bio"
                id="bio"
                onChange={this.onChange}
                value={this.state.bio}
              >
                <option value='0'>non</option>
                <option value='1'>oui</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={4}>Descriptif du vin</Label>
            <Col sm={8}>
              <Input type="textarea"
                name='description'
                id="description"
                placeholder="Ajoutez ici le descriptif de votre vin."
                onChange={this.onChange}
                value={this.state.description}
              />
            </Col>
          </FormGroup>


          <FormGroup check row>
            <Col sm={{ size: 10, offset: 4 }}>
              <Button type="submit" value="Envoyer" > Envoyer</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}
