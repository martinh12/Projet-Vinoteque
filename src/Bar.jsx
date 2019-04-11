import React from 'react';
import Filler from "./Filler"

const Bar = (props) => {
  return (
    <div className="Bar">
      <Filler percentage={props.percentage} />
    </div>
  )
}

export default Bar;