import { useEffect, useState } from "react";
import useFetchTodos from "./useFetchTodos";
import { useQueryClient } from "@tanstack/react-query";

const useLayoutLogic = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchTodos();
  const [todos, setTodos] = useState(data?.pages.flat() || []);
  const queryClient = useQueryClient();

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

    queryClient.setQueryData(["todos"], (oldData) => {
      if (!oldData) {
        return { pages: [[newTodo]] };
      }

      return {
        ...oldData,
        pages: [
          [{ ...newTodo }, ...oldData.pages[0]],
          ...oldData.pages.slice(1),
        ],
      };
    });

    setTodos((prev) => [newTodo, ...prev]);
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
