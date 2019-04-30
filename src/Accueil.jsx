import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CardWine from './CardWine';
import isEmpty from 'lodash/isEmpty';
import "./Accueil.css";


class Accueil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: {},
            loading: false,
        }
    }

    getRandom = () => {
        this.setState({
            loading: true,
        });
        fetch('http://51.68.18.101:3002/vinoveritas/api/wines/random')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    vin: response,
                    loading: false,
                });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.loading && !this.state.loading
            && !isEmpty(prevState.vin) && !isEmpty(this.state.vin)) {
            this.setState({
                vin: {}
            });
        }
    }

    render() {
        return (
            isEmpty(this.state.vin)
                ? (
                    <div className=" container  Home">
                        <div className="row band">
                            <div className="col-lg-5 imgLeft">
                                <img className="logo" src="vin.jpg" alt="vinos" />
                            </div>
                            <div className="col-lg-7 textRight">
                                <h2> Une soirée entre amis ? Un repas en famille ?</h2>
                                <br />
                                <h2> Vous ne savez pas quel vin choisir ?</h2>
                                <br />
                                <h2> N'hésitez pas, laissez nous vous guider en seulement 4 questions !</h2>
                                <br />
                                <div className="row buttons">
                                    <div className="col-6"><NavLink className="nav" to="/quizz" ><Button className="quizz"> C'est parti ! </Button> </NavLink></div>

                                    <div className="col-6"><Button className="random" onClick={this.getRandom}> Au hasard </Button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="Home container">
                        <div className="row">
                            <CardWine vin={this.state.vin} className="col-lg-12" />
                            <div className="col-lg-12"> <Button className="random" onClick={this.getRandom}>
                                Un autre vin au hasard !
                    </Button>
                            </div>
                        </div>

                    </div>
                )
        )
    }
}


export default Accueil;