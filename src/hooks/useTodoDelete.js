import { useQueryClient } from "@tanstack/react-query";

const useTodoDelete = () => {
  const queryClient = useQueryClient();

  const deleteTodo = (id) => {
    queryClient.setQueryData(["todos"], (oldData) => {
      if (!oldData) {
        return oldData;
      }

      return {
        ...oldData,
        pages: oldData.pages.map((page) =>
          page.filter((todo) => todo.id !== id)
        ),
      };
    });
  };

  return { deleteTodo };
};

export default useTodoDelete;
