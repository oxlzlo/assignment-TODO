import PropTypes from "prop-types";

const LoadMoreButton = ({ onClick }) => {
  return (
    <button className="loadMoreButton" onClick={onClick}>
      More
    </button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};

export default LoadMoreButton;
