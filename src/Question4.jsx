import React, { Component } from 'react';

class Question4 extends Component {
    render() {
        return (
            <div className="Question1">
                <h2>Quel Genre ?</h2>
                <ul>
                    <li> <button onClick={this.props.StepPlus}>Fruité</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Boisé</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Sec</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Tannique</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Je ne sais pas</button> </li>


                </ul>
            </div>
        )
    }
}


export default Question4;