import React from "react";
import PropTypes from "prop-types";

import styles from "./todoContainer.sass";

const TodoContainer = ({ children, ...props }) =>
  (
    <div
      className={styles.todoContainer}
      {...props}
    >
      {children}
    </div>
  );

TodoContainer.propTypes = {
  children: PropTypes.node,
};

TodoContainer.defaultProps = {
  children: null,
};

export default TodoContainer;