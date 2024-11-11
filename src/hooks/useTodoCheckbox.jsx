import { useState } from "react";

const useTodoCheckbox = (initialCompleted) => {
  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  const toggleCompleted = () => {
    setIsCompleted((prev) => !prev);
  };

  return { isCompleted, toggleCompleted };
};

export default useTodoCheckbox;
