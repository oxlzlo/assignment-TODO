import PropTypes from "prop-types";

import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ id, title, completed, onDelete }) => {
  return (
    <div
      className={`todoItem_list_todo ${
        completed ? "todoItem_list_todo--completed" : ""
      }`}
    >
      <Checkbox checked={completed} />
      <span className="todoItem_list_todo_title">{title}</span>
      <DeleteButton onClick={() => onDelete(id)} />
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default TodoItem;
