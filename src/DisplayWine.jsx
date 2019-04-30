import React, { Component } from 'react';
import CardWine from './CardWine';

class DisplayWine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: null,
            displayedWine:{},
            anotherWine: false,
        }
    }

    componentDidMount() {
        fetch(`http://51.68.18.101:3002/vinoveritas/api/wines/find?budget=${this.props.budget}&dish=${this.props.dish}&characteristics=${this.props.characteristics}`)
        .then(response => response.json())
        .then(wines => {
            this.setState({
                wines: wines,
                displayedWine: wines[0],
            });
        }
     )
    }

    get2ndWine = () => {
        this.setState({
            displayedWine: this.state.wines[1],
            anotherWine: true,
        });     
    }

    render() {
        let children = null;
        if (!this.state.wines) {
            children = (<p> 'Chargement en cours...'</p>);
        } else if (this.state.wines.length === 0) {
            children = (<p>Aucun vin ne correspond à votre demande</p>);
        } else {
            children = (
                <div>
                    <CardWine vin={this.state.displayedWine} />
                    {
                        (this.state.wines.length > 1 && !this.state.anotherWine)
                        ? <button className="secondChoice"onClick ={this.get2ndWine}>Autre choix</button>
                        : ''
                    }
                </div>
            )
        }

        return(
            <div className="DisplayWine">
                { children }
            </div>
        )
       
    }
}

export default DisplayWine