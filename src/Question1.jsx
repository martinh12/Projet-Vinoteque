import React, { Component } from 'react';
import gvft from './trads';

class Question1 extends Component {
    render() {
        return (
            <div className="Question1">
                <h2>Pour quel évènement ?</h2>
                <ul>
                    <li> <button value="friends" onClick={this.props.plusStep}>{gvft('friends')}</button> </li>
                    <li> <button value="daily" onClick={this.props.plusStep}>{gvft('daily')}</button> </li>
                    <li> <button value="apero" onClick={this.props.plusStep}>{gvft('apero')}</button> </li>
                    <li> <button value="bigDeal" onClick={this.props.plusStep}>{gvft('bigDeal')}</button> </li>

                </ul>
            </div>
        )
    }
}

export default Question1;
