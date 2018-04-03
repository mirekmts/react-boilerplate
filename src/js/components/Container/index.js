import React from "react";
import PropTypes from "prop-types";

import styles from "./container.sass";

const Container = ({ children, el: El, ...props }) => (
  <El className={styles.container} {...props}>
    {children}
  </El>
);

Container.propTypes = {
  children: PropTypes.node,
  el: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  el: "div",
};

export default Container;