export const handleKeyDown = (event, callback) => {
  if (event.key === "Enter" && !event.nativeEvent.isComposing) {
    callback();
  }
};
