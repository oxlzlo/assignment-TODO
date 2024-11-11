import useFetchTodos from "../../hooks/useFetchTodos";
import useTodoDelete from "../../hooks/useTodoDelete";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data } = useFetchTodos();
  const { deleteTodo } = useTodoDelete();

  return (
    <div className="todoItem">
      <div className="todoItem_list">
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

export default TodoList;
