import React, { Component } from 'react';

const Bar = (props) => {
  return (
    <div className="bar">
      <Filler percentage={props.percentage} />
    </div>
  )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

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