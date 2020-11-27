import React, { useState } from 'react';

import './App.css'

import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Code from './components/Code';
import Explanation from './components/Explanation';

const App = () => {
  const [string, setString] = useState('')
  const [reversedString, setReversedString] =useState('')

  const reverser = (string) => {
    setReversedString(string.split('').reverse().join('')) 
  }

  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <Input string={string} setString={setString} reverser={reverser} />
        <Output reversedString={reversedString} />
        <Code />
        <Explanation />
      </div>
      
    </div>
  )
}

export default App;