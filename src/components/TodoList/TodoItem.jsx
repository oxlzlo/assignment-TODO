import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import useTodoCheckbox from "../../hooks/useTodoCheckbox";

const TodoItem = ({ id, title, completed, onDelete }) => {
  const { isCompleted, toggleCompleted } = useTodoCheckbox(completed);

  return (
    <div
      className={`todoItem_list_todo ${
        isCompleted ? "todoItem_list_todo--completed" : ""
      }`}
    >
      <Checkbox checked={isCompleted} onChange={toggleCompleted} />
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
