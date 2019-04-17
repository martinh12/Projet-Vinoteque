import React, { Component } from 'react';

class Question3 extends Component {
    render() {
        return (
            <div className="Question3">
            
                <h2>Pour quel budget ?</h2>
                <ul>
                    <li> <button value="Moins de 10€" onClick={this.props.plusStep}>Moins de 10€</button> </li>
                    <li> <button value="Moins de 20€" onClick={this.props.plusStep}>Moins de 20€</button> </li>
                    <li> <button value="Moins de 30€" onClick={this.props.plusStep}>Moins de 30€</button> </li>
                    <li> <button value="Plus de 30€" onClick={this.props.plusStep}>Plus de 30€</button> </li>
                </ul>
            </div>
        )
    }
}


export default Question3;