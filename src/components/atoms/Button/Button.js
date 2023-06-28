import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = ({ action, children, isSubmit, isDisabled }) => {
  return (
    <button
      className={`${styles.button} ${
        isDisabled ? styles.disabledButton : null
      }`}
      onClick={() => action()}
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
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
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  isSubmit: 'button',
  isDisabled: false,
  action: () => false,
};

export default Button;
