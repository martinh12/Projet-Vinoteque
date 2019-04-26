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
                    <div className="Home">

                        <h2> Une soirée? </h2>
                        <h2> Un repas?</h2>
                        <h2> Tu ne sais pas quel vin choisir ?</h2>
                        <h2> N'hesite pas, laisse nous t'aider en seulement 4 questions !</h2>

                        <NavLink className="nav" to="/quizz" ><Button className="quizz"> GO! </Button> </NavLink>
                        <h2> Ou un vin au hasard ?</h2>
                        
                        <Button className="random" onClick={this.getRandom}>
                            Random
                    </Button>
                    </div>
                ) : (
                    <div className="Home">
                        <CardWine vin={this.state.vin} />
                        <Button className="random" onClick={this.getRandom}>
                            get another Random
                    </Button>
                    </div>
                )
        )
    }
}


export default Accueil;