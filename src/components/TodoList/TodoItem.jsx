import PropTypes from "prop-types";

import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ title, completed }) => {
  return (
    <div
      className={`todoItem_list_todo ${
        completed ? "todoItem_list_todo--completed" : ""
      }`}
    >
      <Checkbox checked={completed} />
      <span className="todoItem_list_todo_title">{title}</span>
      <DeleteButton />
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
};

export default TodoItem;
