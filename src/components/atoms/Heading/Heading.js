import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Heading.module.scss';

const Heading = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
