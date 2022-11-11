import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = ({ action, children, isSubmit }) => {
  return (
    <button
      className={styles.button}
      onClick={() => action()}
      type={isSubmit ? 'submit' : 'button'}
    >
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
  isSubmit: PropTypes.string,
};

Button.defaultProps = {
  isSubmit: 'button',
};

Button.defaultProps = {
  action: () => false,
};

export default Button;
