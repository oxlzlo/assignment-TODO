import PropTypes from "prop-types";

const Button = ({ label, onClick, className, count }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
      {count}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  count: PropTypes.number,
};

export default Button;
