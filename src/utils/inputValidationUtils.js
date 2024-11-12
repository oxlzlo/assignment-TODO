export const validateNoBlank = (newTodo) => {
  if (newTodo.trim()) {
    return false;
  }
  return true;
};

export const validateMoreThanThreeLetters = (newTodo) => {
  if (newTodo.length >= 3) {
    return false;
  }
  return true;
};
