import React, { Component } from 'react';
import gvft from './trads';

class Question3 extends Component {
    render() {
        return (
            <div className="Question3">
            
                <h2>Pour quel budget ?</h2>
                
                     <button value="less10" onClick={this.props.plusStep}>{gvft('less10')}</button>
                     <button value="less20" onClick={this.props.plusStep}>{gvft('less20')}</button> 
                     <button value="less30" onClick={this.props.plusStep}>{gvft('less30')}</button> 
                     <button value="more30" onClick={this.props.plusStep}>{gvft('more30')}</button> 
                
            </div>
        )
    }
}


export default Question3;