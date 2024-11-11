import useTodos from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodos();

  return (
    <div className="todoItem">
      <div className="todoItem_list">
        {todos.map((todo, index) => (
          <TodoItem key={index} title={todo.title} completed={todo.completed} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
