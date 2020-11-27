import React from 'react';

import "../css/Output.css"

const Output = (props) => {
  return (
    <div className="output">
      <p className="output-tagline">Your string reversed is: </p>
      <p className="output-string">{props.reversedString}</p>
    </div>
  )
}

export default Output;