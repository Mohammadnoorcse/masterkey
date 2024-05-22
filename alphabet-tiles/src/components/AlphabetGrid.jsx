// src/components/AlphabetGrid.jsx
import React from 'react';
import './AlphabetGrid.css';

const AlphabetGrid = ({ onTileClick }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return (
    <div className="container">
    <div className="grid">
      {letters.map(letter => (
        <div 
          key={letter} 
          className="tile" 
          onClick={() => onTileClick(letter)}
        >
          {letter}
        </div>
      ))}
    </div>
    </div>
  );
};

export default AlphabetGrid;
