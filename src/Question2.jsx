import React, { Component } from 'react';

class Question2 extends Component {
    render() {
        return (
            <div className="Question2">
                <h2>Que mangez-vous ?</h2>
                <ul>
                    <li> <button onClick={this.props.StepPlus}>Viande rouge</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Viande blanche</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Poisson / Fruits de mer</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Charcuterie</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Fromage</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Déssert / Sucré</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Végan</button> </li>


                </ul>
            </div>
        )
    }
}

export default Question2;