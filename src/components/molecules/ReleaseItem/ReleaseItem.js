import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import * as styles from './ReleaseItem.module.scss';

const ReleaseItem = ({ year, name, color, url }) => {
  return (
    <motion.a
      whileHover={{ y: -5 }}
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.wrapper}
    >
      <p className={styles.year} style={{ backgroundColor: color }}>
        {year}
      </p>
      <p className={styles.name}>{name}</p>
    </motion.a>
  );
};

ReleaseItem.propTypes = {
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  url: PropTypes.string.isRequired,
};

ReleaseItem.defaultProps = {
  color: '#49de73',
};

export default ReleaseItem;
