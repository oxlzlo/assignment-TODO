import PropTypes from "prop-types";

const Contents = ({ children }) => {
  return <main className="contents">{children}</main>;
};

Contents.propTypes = {
  children: PropTypes.node,
};

export default Contents;
