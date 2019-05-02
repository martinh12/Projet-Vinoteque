import React, { Component } from 'react';
import gvft from './trads';
import "./Quizz.css" 

class Tagbutton extends Component {
    render() {
        return (
            <div className="Tagbutton">
                {this.props.choice.map((x, i)=>
                    <button
                        key={i}
                        value={x}
                        onClick={this.props.goBackQuestion}
                    >
                        {gvft(x)}
                    </button>
                )}
            </div>
        )
    }
}

export default Tagbutton;