import PropTypes from "prop-types";
import { handleKeyDown } from "../utils/keyDownUtils";
import useAddTodoInput from "../hooks/useAddTodoInput";

const TodoAddInput = ({ onAddTodo }) => {
  const { newTodo, setNewTodo, addNewTodo } = useAddTodoInput(onAddTodo);

  return (
    <input
      type="text"
      className="todoAddInput"
      placeholder="할 일을 추가하세요"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e, addNewTodo)}
    />
  );
};

TodoAddInput.propTypes = {
  onAddTodo: PropTypes.func,
};

export default TodoAddInput;
