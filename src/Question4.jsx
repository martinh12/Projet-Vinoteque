import React, { Component } from 'react';

class Question4 extends Component {
    render() {
        return (
            <div className="Question4">
            
            
                <h2>Quel Genre ?</h2>
                <ul>
                    <li> <button value="Fruité" onClick={this.props.plusStep}>Fruité</button> </li>
                    <li> <button value="Boisé" onClick={this.props.plusStep}>Boisé</button> </li>
                    <li> <button value="Sec" onClick={this.props.plusStep}>Sec</button> </li>
                    <li> <button value="Tannique" onClick={this.props.plusStep}>Tannique</button> </li>
                    <li> <button value="Je ne sais pas" onClick={this.props.plusStep}>Je ne sais pas</button> </li>
                </ul>
            </div>
        )
    }
}


export default Question4;