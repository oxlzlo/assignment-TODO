import { useInfiniteQuery } from "@tanstack/react-query";

const fetchTodos = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/arahansa/todojsmockdata/${pageParam}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는 데 실패했습니다");
  }
  return response.json();
};

const useFetchTodos = () => {
  return useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= 3 ? nextPage : undefined;
    },
  });
};

export default useFetchTodos;
