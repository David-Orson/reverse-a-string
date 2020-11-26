import React, { useState } from 'react';

import "../css/Input.css"

const Input = () => {
  const [string, setString] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();

  } 

  return (
    <div className="input">
      <form className="input-form" onSubmit={handleSubmit} >
        <label className="input-label">Enter Your String!</label>
        <input className="input-input" type="text" value={string} onChange={(e) => setString(e.target.value)}  />
        <button className="input-button">REVERSE</button>
      </form>
    </div>
  )
}

export default Input;