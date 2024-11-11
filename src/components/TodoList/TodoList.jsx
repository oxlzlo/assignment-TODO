import useTodos from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, deleteTodo } = useTodos();

  return (
    <div className="todoItem">
      <div className="todoItem_list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
