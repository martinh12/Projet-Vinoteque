import React, { Component } from "react";
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AdminCard from "./AdminCard";
import { Row, Button } from 'reactstrap';

import "./AdminPage.css"


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: [],
        }
    }


    componentDidMount() {
        fetch("http://51.68.18.101:3002/vinoveritas/api/wines")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    wines: data
                })
            })
    }

    render() {
        return (
            <Container className="AdminPage">
                <Row>
                    <NavLink exact to="/adminForm" activeStyle={{ color: "red" }}>
                        <Button>Ajout vin</Button>
                    </NavLink>
                </Row>
                {this.state.wines.map((x, i) => (<AdminCard key={i} wine={x} />))}
            </Container>
        )
    }
}

export default AdminPage;
