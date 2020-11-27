import React, { useState } from 'react';

import "../css/Explanation.css"

const Explanation = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }


  return (
    <div className={`explanation ${(open ? ('explanation-opened') : (null))}`} onClick={toggleOpen}>
      <p className="explanation-title">More info, Solutions and Explanation</p>
      <div className="explanation-dropdown">
        <p className="explanation-text">This is a simple coding challenge for reversing a string. <br /><br />
        There is quite an easy way to execute this using helper methods built into JS.<br /><br />
        The first helper method 'split('')' separates each character into a string of an array, the second '.reverse()' reverses the order of the strings in the array and the ''.join('')' method takes all of the strings in the array and concatenates them into a single string.<br /><br />
        We then would usually return this new string, but when using React, we just put this new string in state by calling 'setReversedString()' so that it can be used in a different component.</p>
        </div>
    </div>
  )
}

export default Explanation;