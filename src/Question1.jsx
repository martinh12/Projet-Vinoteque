import React, { Component } from 'react';
import gvft from './trads';

class Question1 extends Component {
    render() {
        return (
            <div className="Question1">
                <h2>Pour quel évènement ?</h2>

                <button value="friends" onClick={this.props.plusStep}>{gvft('friends')}</button>
                <button value="daily" onClick={this.props.plusStep}>{gvft('daily')}</button>
                <button value="apero" onClick={this.props.plusStep}>{gvft('apero')}</button>
                <button value="bigDeal" onClick={this.props.plusStep}>{gvft('bigDeal')}</button>


            </div>
        )
    }
}

export default Question1;
