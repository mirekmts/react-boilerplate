import Preact from "preact";
import PropTypes from "prop-types";

import "./index.sass";

const Button = ({ onClick, children }) => (
  <div className="flex justify-end">
    <button onClick={onClick}>{ children }</button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
};


export default Button;
