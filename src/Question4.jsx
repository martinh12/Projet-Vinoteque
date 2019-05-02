import React, { Component } from 'react';
import gvft from './trads';

class Question4 extends Component {
    render() {
        return (
            <div className="Question4">
            
            
                <h2>Quel Genre ?</h2>
                
                     <button value="fruity" onClick={this.props.plusStep}>{gvft('fruity')}</button>
                     <button value="wooded" onClick={this.props.plusStep}>{gvft('wooded')}</button> 
                     <button value="dry" onClick={this.props.plusStep}>{gvft('dry')}</button> 
                     <button value="mellow" onClick={this.props.plusStep}>{gvft('mellow')}</button> 
                     <button value="tannic" onClick={this.props.plusStep}>{gvft('tannic')}</button> 
                     <button value="idk" onClick={this.props.plusStep}>{gvft('idk')}</button> 
            
            </div>
        )
    }
}


export default Question4;