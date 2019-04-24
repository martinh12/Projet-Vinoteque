import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

import './AdminForm.css';


export default class AdminForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      title:'',
      nameLink:'',
      link: '',
      wineDress:'red',
      dish:'redMeat',
      budget:'',
      characteristics:'',
      bio:'0',
      description:'',
      image:'https://via.placeholder.com/150'
    }
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
    });
  };

  submitForm=(e)=>{
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
       };
           
       const url = " http://51.68.18.101:3002/vinoveritas/api/wines/";
    
       e.preventDefault();

        fetch(url, config)
        .then(res => res.json())
        .then(res => {
        if (res.error) {
            alert(res.error);
        } else {
          console.log(res)
            alert(`vin ajouté avec l'ID ${res}!`);
        }
        }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un vin');
        });
  }
  



  render() {
    return (
      <div className="AdminForm container">

        <div className="adminMainTitle">
          <h1>Espace administration</h1><br />
          
        </div>
        <img src={this.state.image} alt = '' className='imgVin'/>

        <Form className="formAdmin" onSubmit={this.submitForm}>

        

          <FormGroup row>
            <Label for="title" sm={4}>Nom du vin</Label>
            <Col sm={8}>
              <Input type="text" 
                name="title" 
                id="title" 
                placeholder="ex : Château d'Arcins 2014"
                onChange={this.onChange}
                value={this.state.name}
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
                value={this.state.name}
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
                value={this.state.name}
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
                value={this.state.name}
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
                value={this.state.name}
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
                value={this.state.name}
              >
                <option value='redMeat'>Viande rouge</option>
                <option value='whiteMeat'>Viande blanche</option>
                <option value='seaFood'>Poisson / Fruits de mer</option>
                <option value='delicatessen'>Charcuterie</option>
                <option value='cheese'>Fromage</option>
                <option value='afters'>Dessert / sucré</option>
                <option value='vegan'>Végan</option>
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
                value={this.state.name}
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
                value={this.state.name}
              >
                <option value='fruity'>Fruité</option>
                <option value='wooded' >Boisé</option>
                <option value='tannic' >Tannique</option>
                <option value='dry' >Sec</option> 
                <option value='mellow' >Moelleux</option>
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
                value={this.state.name}
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
                value={this.state.name}
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
