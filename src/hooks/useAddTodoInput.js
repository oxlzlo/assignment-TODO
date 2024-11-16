import { useState } from "react";
import {
  validateMoreThanThreeLetters,
  validateNoBlank,
} from "../utils/inputValidationUtils";

const useAddTodoInput = (onAddTodo) => {
  const [newTodo, setNewTodo] = useState("");

  const validateInput = () => {
    if (validateNoBlank(newTodo)) {
      alert("내용을 입력해주세요");
      setNewTodo("");
      return false;
    }

    if (validateMoreThanThreeLetters(newTodo)) {
      alert("세글자 이상 입력해주세요.");
      setNewTodo("");
      return false;
    }

    return true;
  };

  const addNewTodo = () => {
    if (validateInput()) {
      onAddTodo(newTodo);
      setNewTodo("");
      console.log(newTodo);
    }
  };

  return { newTodo, setNewTodo, addNewTodo };
};

export default useAddTodoInput;
