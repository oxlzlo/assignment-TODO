import { useState, useEffect } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/arahansa/todojsmockdata/1")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) =>
        console.error("투두리스트 데이터 불러오기 실패", error)
      );
  }, []);

  return todos;
};

export default useTodos;
