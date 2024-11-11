import PropTypes from "prop-types";
import useFetchTodos from "../../hooks/useFetchTodos";
import useTodoDelete from "../../hooks/useTodoDelete";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  const { data } = useFetchTodos();
  const { deleteTodo } = useTodoDelete();

  return (
    <div className="todoItem">
      <div className="todoItem_list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex}>
            {page.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
