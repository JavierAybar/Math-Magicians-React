import './Calculator.css';

const Calculator = () => (
  <div className="calculator-container">
    <ChildContent />
  </div>
);

const ChildContent = () => (
  <div className="calculator">
    <p className="result">0</p>
    <section className="number">
      <button className="btn" type="button">AC</button>
      <button className="btn" type="button">+/-</button>
      <button className="btn" type="button">%</button>
      <button className="btn" type="button">7</button>
      <button className="btn" type="button">8</button>
      <button className="btn" type="button">9</button>
      <button className="btn" type="button">4</button>
      <button className="btn" type="button">5</button>
      <button className="btn" type="button">6</button>
      <button className="btn" type="button">1</button>
      <button className="btn" type="button">2</button>
      <button className="btn" type="button">3</button>
      <button className="btn btn-zero" type="button">0</button>
      <button className="btn" type="button">.</button>
    </section>
    <section className="operator">
      <button className="btn btn-operator" type="button">÷</button>
      <button className="btn btn-operator" type="button">X</button>
      <button className="btn btn-operator" type="button">-</button>
      <button className="btn btn-operator" type="button">+</button>
      <button className="btn btn-operator" type="button">=</button>
    </section>
  </div>
);
export default Calculator;
