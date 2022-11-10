import React from 'react';
import logo from 'images/logo.svg';
import * as styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Czwórka News Logo" className={styles.logo} />
      <p>Czwórka News ©️ 2022 | Wszelkie prawa zastrzeżone</p>
      <p>
        Wykonanie:{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.author}
          href="https://revku.dev/"
        >
          Patryk Skolimowski
        </a>
      </p>
    </div>
  );
};

export default Footer;
