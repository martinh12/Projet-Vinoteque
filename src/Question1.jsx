import React, { Component } from 'react';

class Question1 extends Component {

    render() {
        return (
            <div className="Question1">
                <h2>Pour quel évènement ?</h2>
                <ul>
                    <li> <button onClick={this.props.plusStep}>Entre amis</button> </li>
                    <li> <button onClick={this.props.plusStep}>Au quotidien</button> </li>
                    <li> <button onClick={this.props.plusStep}>Apéro</button> </li>
                    <li> <button onClick={this.props.plusStep}>Grande Occasion</button> </li>

                </ul>
            </div>
        )
    }
}

export default Question1;