import React, { useState } from 'react';
import Heading from 'components/atoms/Heading/Heading';
import ReleaseItem from 'components/molecules/ReleaseItem/ReleaseItem';
import getReleasesData from 'hooks/get-releases-data';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import * as styles from './Releases.module.scss';

const Releases = () => {
  const initialData = getReleasesData();
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const search = (query) => {
    const newItems = [];

    initialData.forEach((item) => {
      if (item.releaseName.toLowerCase().includes(query.toLowerCase())) {
        newItems.push(item);
        return true;
      }

      if (item.year.year.toLowerCase().includes(query.toLowerCase())) {
        newItems.push(item);
        return true;
      }
    });

    setData(newItems);
  };

  const handleKeyPress = (query) => {
    setSearchQuery(query);
    search(query);
  };

  return (
    <div className={styles.wrapper} id="releases">
      <Heading>Czytaj online</Heading>

      <SearchBar
        search={search}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleChange={handleKeyPress}
      />

      <div className={styles.content}>
        {data.length === 0 ? (
          <p>Nie znaleziono numerów.</p>
        ) : (
          data
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => {
              return (
                <ReleaseItem
                  key={item.id}
                  name={item.releaseName}
                  year={item.year.year}
                  url={item.pdfFile.url}
                  color={item.year.backgroundColor.hex}
                />
              );
            })
        )}
      </div>
    </div>
  );
};

export default Releases;
