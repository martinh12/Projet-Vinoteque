import React, { Component } from 'react';
import gvft from './trads';

class Question2 extends Component {
    render() {
        return (
            <div className="Question2">
               
                <h2>Que mangez-vous ?</h2>
                
                     <button value="redMeat" onClick={this.props.plusStep}>{gvft('redMeat')}</button> 
                     <button value="whiteMeat" onClick={this.props.plusStep}>{gvft('whiteMeat')}</button> 
                     <button value="seafood" onClick={this.props.plusStep}>{gvft('seafood')}</button> 
                     <button value="delicatessen" onClick={this.props.plusStep}>{gvft('delicatessen')}</button> 
                     <button value="cheese" onClick={this.props.plusStep}>{gvft("cheese")}</button> 
                     <button value="afters" onClick={this.props.plusStep}>{gvft('afters')}</button> 
                 <button value="vegan" onClick={this.props.plusStep}>{gvft('vegan')}</button> 


                
            </div>
        )
    }
}

export default Question2;