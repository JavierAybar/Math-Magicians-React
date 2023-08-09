import PropTypes from 'prop-types';
import Button from './Button';

const ChildContent = ({ clickHandler }) => {
  const handlerClick = (nameButton) => clickHandler(nameButton);

  return (
    <section className="buttons-container">
      <div className="container-rows">
        <Button name="AC" clickHandler={handlerClick} grey />
        <Button name="+/-" clickHandler={handlerClick} grey />
        <Button name="%" clickHandler={handlerClick} grey />
        <Button name="÷" clickHandler={handlerClick} orange />
      </div>
      <div className="container-rows">
        <Button name="7" clickHandler={handlerClick} grey />
        <Button name="8" clickHandler={handlerClick} grey />
        <Button name="9" clickHandler={handlerClick} grey />
        <Button name="x" clickHandler={handlerClick} orange />
      </div>
      <div className="container-rows">
        <Button name="4" clickHandler={handlerClick} grey />
        <Button name="5" clickHandler={handlerClick} grey />
        <Button name="6" clickHandler={handlerClick} grey />
        <Button name="-" clickHandler={handlerClick} orange />
      </div>
      <div className="container-rows">
        <Button name="1" clickHandler={handlerClick} grey />
        <Button name="2" clickHandler={handlerClick} grey />
        <Button name="3" clickHandler={handlerClick} grey />
        <Button name="+" clickHandler={handlerClick} orange />
      </div>
      <div className="container-rows">
        <Button name="0" clickHandler={handlerClick} wide grey />
        <Button name="." clickHandler={handlerClick} grey />
        <Button name="=" clickHandler={handlerClick} orange />
      </div>
    </section>
  );
};

ChildContent.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ChildContent;
