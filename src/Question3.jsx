import React, { Component } from 'react';

class Question3 extends Component {
    render() {
        return (
            <div className="Question1">
                <h2>Pour quel budget ?</h2>
                <ul>
                    <li> <button onClick={this.props.StepPlus}>Moins de 10€</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Moins de 20€</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Moins de 30€</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Plus de 30€</button> </li>
                </ul>
            </div>
        )
    }
}


export default Question3;