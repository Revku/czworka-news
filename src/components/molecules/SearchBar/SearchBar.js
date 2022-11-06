import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'components/atoms/Button/Button';
import * as styles from './Searchbar.module.scss';

const SearchBar = ({ searchQuery, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id="query"
        type="text"
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Szukaj..."
      />
      {/* <Button action={() => search(searchQuery)}>Szukaj</Button> */}
    </div>
  );
};

SearchBar.propTypes = {
  // setSearchQuery: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  // search: PropTypes.func.isRequired,
};

export default SearchBar;
