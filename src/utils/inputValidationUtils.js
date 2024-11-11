export const validateNoBlank = (newTodo) => {
  if (/^\S+$/.test(newTodo)) {
    return false;
  }
  return true;
};

export const validateMoreThanThreeLetters = (newTodo) => {
  if (/^.{3,}$/.test(newTodo)) {
    return false;
  }
  return true;
};
