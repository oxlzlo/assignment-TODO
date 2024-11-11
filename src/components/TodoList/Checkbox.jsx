import PropTypes from "prop-types";

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      className="todoItem_list_todo_checkbox"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
