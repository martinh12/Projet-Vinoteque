import React,{Component} from 'react';
import './AdminCard.css'
import { Card, CardImg,CardTitle, Button, Row, Col } from 'reactstrap';


class AdminCard extends Component {
    deleteWine(id){
        const config ={
            method: "DELETE",
        } 

        const url = "http://51.68.18.101:3002/vinoveritas/api/wines/" + id;


        fetch(url,config)
        .then(res => {
            (res.OK)? alert("Vin introuvable") : alert("Vin supprimé");
            
        })
        .catch(err => console.error(err))
      }   

    render(){
    const {image,title,id} = this.props.wine
    return (
       
            <Col sm="2" className="AdminCard">
            <Card body>
            <Row>
                <Col sm="12" className="imageCard">
                    <CardImg src={image}/>
                </Col>
            </Row>
            
                <CardTitle className="title">{title}</CardTitle>
                <Row>
                    <Col>                  
                        <Button>Modifier</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => {this.deleteWine(id); }}>Supprimer</Button>
                    </Col>
                </Row>
            </Card>
            
            </Col>


    );
};}

export default AdminCard;