import PropTypes from 'prop-types';

const Button = ({
  clickHandler,
  name,
  orange,
  grey,
  wide,
}) => {
  const handlerClick = () => clickHandler(name);

  const className = [
    'btn',
    orange ? 'orange' : '',
    grey ? 'grey' : '',
    wide ? 'wide' : '',
  ];

  return (
    <button className={className.join(' ').trim()} type="button" onClick={handlerClick}>{name}</button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  orange: PropTypes.bool,
  grey: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  orange: false,
  grey: false,
  wide: false,
};

export default Button;
