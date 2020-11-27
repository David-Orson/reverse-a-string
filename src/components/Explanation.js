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
        We then would usually return this new string, but when using React, we just put this new string in state by calling 'setReversedString()' so that it can be used in a different component.<br /><br/>
        Another solution would be to initialize a variable 'reversed' and iterate over it using a for loop. For each iteration you concatenate the newly modified reversed string to the character which is being addressed in the current iteration.<br /><br />
        The code for this could be as follows:</p>
        <div className="code-container">
          <p>
            <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/>
            <span className="yellow indent">let</span><span className="purple"> reversed</span>{' = '}<span className="orange">''</span>{';'}<br />
            <br />
            <span className="yellow indent">for</span><span className="cyan"> (</span><span className="yellow">let</span><span className="purple"> character</span><span className="yellow"> of</span><span className="purple"> string</span><span className="cyan">){' {'}</span><br />
            <span className="purple indent">reversed</span> = <span className="purple">character</span><span className="yellow"> + </span><span className="purple">reversed</span>;<br />
            <span className="cyan indent">{'}'}</span><br />
            <br />
            <span className="cyan indent">setReversedString(</span><span className="purple">reversed</span><span className="cyan">)</span><br />
            <span className="purple">{'}'}</span>
          </p>
        </div>
        <p className="explanation-text">
          Another Solution that could be used is to use the reduce function on the array with much the same logic as the previous solution.<br /><br />
          We first split the string into an array of the characters using the '.split()' method, then we use the reduce function to iterate over the array and reduce it into a single value, being a string. The reducer function takes two arguments as a higher order function, the first being a function with the arguments 'rev' and 'char', the second argument is the initialization value which we set as an empty string.<br /><br />
          We contain all of this logic inside the 'setReversedString()' React function for use inside other components of the app.<br /><br />
        </p>
        <div className="code-container-extra">
          <p>
          <span className=""></span>
          <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/>
          <span className="cyan indent">setReversedString(</span><span className="purple">string</span>.<span className="cyan">split</span><span className="yellow">(</span><span className="orange">''</span><span className="yellow">)</span>.<span className="cyan">reduce</span><span className="yellow">(</span><span className="purple">(rev</span>,<span className="purple">char)</span><span className="yellow"> ={'>'} </span><span className="purple">char</span><span className="yellow"> + </span><span className="purple">rev</span>,<span className="orange">''</span><span className="yellow">)</span><span className="cyan">)</span><br />
          <span className="purple">{'}'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Explanation;