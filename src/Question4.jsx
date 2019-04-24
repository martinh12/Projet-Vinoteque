import React, { Component } from 'react';
import gvft from './trads';

class Question4 extends Component {
    render() {
        return (
            <div className="Question4">
            
            
                <h2>Quel Genre ?</h2>
                <ul>
                    <li> <button value="fruity" onClick={this.props.plusStep}>{gvft('fruity')}</button> </li>
                    <li> <button value="wooded" onClick={this.props.plusStep}>{gvft('wooded')}</button> </li>
                    <li> <button value="dry" onClick={this.props.plusStep}>{gvft('dry')}</button> </li>
                    <li> <button value="mellow" onClick={this.props.plusStep}>{gvft('mellow')}</button> </li>
                    <li> <button value="tannic" onClick={this.props.plusStep}>{gvft('tannic')}</button> </li>
                    <li> <button value="idk" onClick={this.props.plusStep}>{gvft('idk')}</button> </li>
                </ul>
            </div>
        )
    }
}


export default Question4;