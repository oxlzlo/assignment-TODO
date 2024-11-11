import { useEffect, useState } from "react";
import useFetchTodos from "./useFetchTodos";

const useLayoutLogic = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchTodos();
  const [todos, setTodos] = useState(data?.pages.flat() || []);

  useEffect(() => {
    if (data) {
      setTodos(data.pages.flat());
    }
  }, [data]);

  const handleAddTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);

    console.log(newTodo);
  };

  return {
    todos,
    handleAddTodo,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useLayoutLogic;
