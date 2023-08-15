import Calculator from '../components/Calculator';
import '../styles/Calculate.css';

function Calculate() {
  return (
    <section className="calculate-container">
      <h2 className="calculate-title">Lets do some math!</h2>
      <Calculator />
    </section>
  );
}

export default Calculate;
