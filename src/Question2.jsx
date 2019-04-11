import React, { Component } from 'react';

class Question2 extends Component {
    render() {
        return (
            <div className="Question2">
                <h2>Que mangez-vous ?</h2>
                <ul>
                    <li> <button onClick={this.props.plusStep}>Viande rouge</button> </li>
                    <li> <button onClick={this.props.plusStep}>Viande blanche</button> </li>
                    <li> <button onClick={this.props.plusStep}>Poisson / Fruits de mer</button> </li>
                    <li> <button onClick={this.props.plusStep}>Charcuterie</button> </li>
                    <li> <button onClick={this.props.plusStep}>Fromage</button> </li>
                    <li> <button onClick={this.props.plusStep}>Déssert / Sucré</button> </li>
                    <li> <button onClick={this.props.plusStep}>Végan</button> </li>


                </ul>
            </div>
        )
    }
}

export default Question2;