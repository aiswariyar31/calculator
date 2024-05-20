import React, { useState, useEffect, useRef } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const clickSoundRef = useRef(null);

  useEffect(() => {
    clickSoundRef.current = new Audio('/sounds.mp3');
  }, []);

  const playClickSound = () => {
    clickSoundRef.current.currentTime = 0; // Rewind to the start
    clickSoundRef.current.play();
  };

  const handleClick = (value) => {
    playClickSound();
    setDisplay(display + value);
  };

  const handleClear = () => {
    playClickSound();
    setDisplay('');
  };

  const handleBackspace = () => {
    playClickSound();
    setDisplay(display.slice(0, -1));
  };

  const handleEvaluate = () => {
    playClickSound();
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClear} className="button clear">C</button>
        <button onClick={handleBackspace} className="button">&larr;</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
        <button onClick={() => handleClick('*')} className="button operator">*</button>
        
        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('-')} className="button operator">-</button>
        
        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('+')} className="button operator">+</button>
        
        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={() => handleClick('/')} className="button operator">/</button>
        <button onClick={handleEvaluate} className="button operator">=</button>
        <button onClick={() => handleClick('0')} className="button zero">0</button>
      </div>
    </div>
  );
};

export default Calculator;
