import React, { Component } from 'react';

class Question1 extends Component {

    render() {
        return (
            <div className="Question1">
                <h2>Pour quel évènement ?</h2>
                <ul>
                    <li> <button onClick={this.props.StepPlus}>Entre amis</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Au quotidien</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Apéro</button> </li>
                    <li> <button onClick={this.props.StepPlus}>Grande Occasion</button> </li>

                </ul>
            </div>
        )
    }
}

export default Question1;