import React, { Component } from 'react';


class Tagbutton extends Component {

    render() {
        return (
            <div className = "Tagbutton">
                {this.props.choice.map((x, i)=><button  key ={i} value = {x} onClick={this.props.goBackQuestion} > {x}</button>)}
            </div>
        )
    }
}
export default Tagbutton;