import PropTypes from "prop-types";
import Delete from "../../assets/delete.svg";

const DeleteButton = ({ onClick }) => {
  return (
    <img
      className="todoItem_list_todo_delete"
      src={Delete}
      alt="삭제 버튼"
      onClick={onClick}
    />
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteButton;
