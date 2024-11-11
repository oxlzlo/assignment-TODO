import PropTypes from "prop-types";

const Checkbox = ({ checked }) => {
  return (
    <input
      className="todoItem_list_todo_checkbox"
      type="checkbox"
      checked={checked}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

export default Checkbox;
