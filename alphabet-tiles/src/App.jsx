// src/App.jsx
import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import './App.css';

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;
    newString = replaceConsecutiveLetters(newString);
    setOutputString(newString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, (match) => '_'.repeat(match.length));
  };

  return (
    <div className="App">
      <AlphabetGrid onTileClick={handleTileClick} />
      <div id="outputString" className="output-string">{outputString}</div>
    </div>
  );
};

export default App;
