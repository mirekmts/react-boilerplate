import React from "react";
import PropTypes from "prop-types";

import styles from "./errorContainer.sass";

const ErrorContainer = ({ children, ...props }) =>
  (
    <div
      className={styles.errorContainer}
      {...props}
    >
      {children}
    </div>
  );

ErrorContainer.propTypes = {
  children: PropTypes.node,
};

ErrorContainer.defaultProps = {
  children: null,
};

export default ErrorContainer;