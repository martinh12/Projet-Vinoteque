import React, { Component } from 'react';


class Question2 extends Component {
    render() {
        return (
            <div className="Question2">
               
                <h2>Que mangez-vous ?</h2>
                <ul>
                    <li> <button value="Viande rouge" onClick={this.props.plusStep}>Viande rouge</button> </li>
                    <li> <button value="Viande blanche" onClick={this.props.plusStep}>Viande blanche</button> </li>
                    <li> <button value="Poisson / Fruits de mer" onClick={this.props.plusStep}>Poisson / Fruits de mer</button> </li>
                    <li> <button value="Charcuterie" onClick={this.props.plusStep}>Charcuterie</button> </li>
                    <li> <button value="Fromage" onClick={this.props.plusStep}>Fromage</button> </li>
                    <li> <button value="Déssert / sucré" onClick={this.props.plusStep}>Déssert / Sucré</button> </li>
                    <li> <button value="Végan" onClick={this.props.plusStep}>Végan</button> </li>


                </ul>
            </div>
        )
    }
}

export default Question2;