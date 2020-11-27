import React, { useState } from 'react';

import "../css/Code.css"

const Code = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }


  return (
    <div className={`code ${(open ? ('code-opened') : (null))}`} onClick={toggleOpen}>
      <p className="code-title">Code used</p>
      {/* {open ? ( */}<div className="code-dropdown">
        <p className="code-tagline">The code used for the functionality of this challenge is:</p>
        <div className="code-container">
          <p><span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/> 
            <span className="cyan indent">setReversedString</span><span className="cyan">(</span><span className="purple">string</span>.<span className="cyan">split</span><span className="yellow">(</span><span className="orange">''</span><span className="yellow">)</span>.<span className="cyan">reverse</span><span className="yellow">()</span>.<span className="cyan">join</span><span className="yellow">(</span><span className="orange">''</span><span className="yellow">)</span><span className="cyan">{'}'}</span><br/> 
            <span className="purple">{'}'}</span>
          </p>
        </div>
      </div>) {/* : (null)} */}
    </div>
  )
}

export default Code;