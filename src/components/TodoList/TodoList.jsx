import useTodos from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data, deleteTodo } = useTodos();

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
