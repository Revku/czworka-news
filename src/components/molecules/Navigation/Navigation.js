import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import logo from 'images/logo.svg';
import * as styles from './Navigation.module.scss';

const Navigation = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const handleClick = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case 'link_releases':
        gsap.to(window, { duration: 1, scrollTo: '#gazetki' });
        break;
      case 'link_team':
        gsap.to(window, { duration: 1, scrollTo: '#zespol' });
        break;
      case 'link_contact':
        gsap.to(window, { duration: 1, scrollTo: '#kontakt' });
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <a href="./">
          <img src={logo} alt="Czwórka News Logo" />
        </a>
      </div>
      <div>
        <a
          className={styles.item}
          href="./#"
          id="link_releases"
          onClick={(event) => handleClick(event)}
        >
          Czytaj online
        </a>
        <a
          className={styles.item}
          href="./#"
          id="link_team"
          onClick={(event) => handleClick(event)}
        >
          Nasz zespół
        </a>
        <a
          className={styles.item}
          href="./#"
          id="link_contact"
          onClick={(event) => handleClick(event)}
        >
          Kontakt
        </a>
      </div>
    </div>
  );
};

export default Navigation;
