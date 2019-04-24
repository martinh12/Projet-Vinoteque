import React, {Component}from "react";
import { Container } from 'reactstrap';
import AdminCard from "./AdminCard";
import "./AdminPage.css"


class AdminPage extends Component{
    constructor(props){
        super(props);
            this.state={
                wines:[]
            }
        
    }


componentDidMount(){
    fetch("http://51.68.18.101:3002/vinoveritas/api/wines")
    .then(response => response.json())
    .then(data => {
        this.setState({
            wines:data
        })
    })
}



    render(){
        return(
            
                <Container clasName="AdminPage">
                {this.state.wines.map((x,i)=> (<AdminCard key={i} wine={x}/>))}
                </Container>
            

        )
    }
}

export default AdminPage;
//
