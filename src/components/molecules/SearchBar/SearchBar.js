import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Searchbar.module.scss';

const SearchBar = ({ searchQuery, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id="query"
        autoComplete="off"
        type="text"
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Szukaj..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default SearchBar;
