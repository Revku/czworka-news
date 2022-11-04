import React from 'react';
import logo from 'images/logo.svg';
import * as styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <a href="./">
        <img src={logo} alt="Czwórka News Logo" />
      </a>
    </div>
  );
};

export default Navigation;
