import React, { Component } from 'react';
import Bar from "./Bar"
import './ProgressBar.css'

class ProgressBar extends Component {

  render() {
    return (
      <div className = "ProgressBar" >
        <div className = {this.props.progress}>
          <h2> Progression des questions </h2>
          <Bar percentage={this.props.percentage} /> 
        </div>
      </div> 
    )
  }
}

export default ProgressBar;