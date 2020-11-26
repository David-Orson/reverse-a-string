import React from 'react';

import './App.css'

import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Code from './components/Code';
import Explanation from './components/Explanation';

const App = () => {
  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <Input />
        <Output />
        <Code />
        <Explanation />
      </div>
      
    </div>
  )
}

export default App;