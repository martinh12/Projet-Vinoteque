import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Card, CardImg, CardTitle, Button, Row, Col } from 'reactstrap';
import './AdminCard.css'


class AdminCard extends Component {

    updateWine(id) {
        this.props.history.push(`/adminForm/${id}`);
    }

    deleteWine(id) {
        const config = {
            method: "DELETE",
        }

        const url = "http://51.68.18.101:3002/vinoveritas/api/wines/" + id;

        fetch(url, config)
            .then(res => {
                if (res.ok) {
                    alert("Vin supprimé");
                } else {
                    alert("Vin introuvable");
                }
            })
            .catch(err => console.error(err))
    }

    render() {
        const { image, title, id } = this.props.wine
        return (
            <div className="AdminCard col-sm-3">
                <Card body>
                    <Row>
                        <Col sm="12" className="imageCard">
                            <CardImg src={image} />
                        </Col>
                    </Row>

                    <CardTitle className="title">{title}</CardTitle>
                    <Row>

                        <Col>
                            <Button onClick={() => { this.updateWine(id) }}>Modif vin</Button>
                        </Col>

                        <Col>
                            <Button onClick={() => { this.deleteWine(id); }}>Supprimer</Button>
                        </Col>
                    </Row>
                </Card>

            </div>
        );
    };
}

export default withRouter(AdminCard);