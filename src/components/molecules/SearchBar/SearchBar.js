import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import * as styles from './Searchbar.module.scss';

const SearchBar = ({ search, setSearchQuery, searchQuery, onKeyPress }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id="query"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={onKeyPress}
        placeholder="Szukaj..."
      />
      <Button action={() => search(searchQuery)}>Szukaj</Button>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchBar;
