import React, { Component } from 'react';
import Bar from "./Bar"

class ProgressBar extends Component {

  render() {
    return (
      <div>
        <h2> Progression des questions </h2>
        <Bar percentage={this.props.percentage} /> 
      </div> 
    )
  }
}

export default ProgressBar;