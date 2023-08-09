import React, { useState } from 'react';
import './Calculator.css';
import Display from './Display';
import ChildContent from './PanelButtons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handlerClick = (nameButton) => {
    setState(calculate(state, nameButton));
  };

  return (
    <div className="calculator-container">
      <Display value={state.next || state.operation || state.total || '0'} />
      <ChildContent clickHandler={handlerClick} />
    </div>
  );
};

export default Calculator;
