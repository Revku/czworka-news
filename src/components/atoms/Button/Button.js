import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = ({ action, children }) => {
  return (
    <button className={styles.button} onClick={() => action()} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  action: () => false,
};

export default Button;
