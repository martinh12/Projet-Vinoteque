import React, { Component } from 'react';
import gvft from './trads';

class Question2 extends Component {
    render() {
        return (
            <div className="Question2">
               
                <h2>Que mangez-vous ?</h2>
                <ul>
                    <li> <button value="redMeat" onClick={this.props.plusStep}>{gvft('redMeat')}</button> </li>
                    <li> <button value="whiteMeat" onClick={this.props.plusStep}>{gvft('whiteMeat')}</button> </li>
                    <li> <button value="seafood" onClick={this.props.plusStep}>{gvft('seafood')}</button> </li>
                    <li> <button value="delicatessen" onClick={this.props.plusStep}>{gvft('delicatessen')}</button> </li>
                    <li> <button value="cheese" onClick={this.props.plusStep}>{gvft("cheese")}</button> </li>
                    <li> <button value="afters" onClick={this.props.plusStep}>{gvft('afters')}</button> </li>
                    <li> <button value="vegan" onClick={this.props.plusStep}>{gvft('vegan')}</button> </li>


                </ul>
            </div>
        )
    }
}

export default Question2;