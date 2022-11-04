import React from 'react';

import Navigation from 'components/molecules/Navigation/Navigation';
import Button from 'components/atoms/Button/Button';
import arrowIcon from 'images/arrowIcon.svg';
import * as styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navigation />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Bądź na bieżąco ze wszystkimi
          <br /> wydarzeniami z
          <span className={styles.mark}> Czwórką News Online</span>!
        </h1>
        <p className={styles.paragraph}>
          Ut proin massa elit hac proin. Sed senectus fermentum, ut nisl leo
          laoreet. At condimentum mattis adipiscing nisi, felis sit. Purus nam
          et tempor eros diam tortor gravida et molestie.
        </p>
        <Button>Czytaj online</Button>
      </div>
      <div className={styles.arrowWrapper}>
        <img src={arrowIcon} alt="Strzałka w dół" />
      </div>
    </div>
  );
};

export default Header;
