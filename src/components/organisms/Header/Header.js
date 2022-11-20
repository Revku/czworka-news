import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { motion } from 'framer-motion';

import Navigation from 'components/molecules/Navigation/Navigation';
import Button from 'components/atoms/Button/Button';
import arrowIcon from 'images/arrowIcon.svg';
import * as styles from './Header.module.scss';

const Header = () => {
  const navRef = React.useRef('');
  const contentRef = React.useRef('');
  const arrowRef = React.useRef('');

  gsap.registerPlugin(ScrollToPlugin);
  const handleClick = () => {
    gsap.to(window, { duration: 1, scrollTo: '#releases' });
  };

  React.useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.5 }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.8 }
    );
    gsap.fromTo(
      arrowRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 1 }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={navRef} className={styles.nav}>
        <Navigation />
      </div>
      <div className={styles.content} ref={contentRef}>
        <h1 className={styles.title}>
          Bądź na bieżąco ze wszystkimi
          <br /> wydarzeniami z
          <span className={styles.mark}> Czwórką News Online</span>!
        </h1>
        <p className={styles.paragraph}>
          Gazetka szkolna &quot;Czwórka News&quot; pojawia się cyklicznie przez
          cały rok szkolny. Materiały w gazetce redagują uczniowie uczęszczający
          na zajęcia redakcyjne pod opieką pani Wioletty Szymonik. Umieszczają w
          niej informacje z życia szkoły, konkursy, wywiady oraz relacje z
          imprez i świąt w szkole. Rozwijają w ten sposób swoje zainteresowania,
          uczą się redagowania tekstów, współpracy w zespole i odpowiedzialności
          za powierzone zadania.
        </p>
        <Button action={handleClick}>Czytaj online</Button>
      </div>
      <div className={styles.arrowWrapper} ref={arrowRef}>
        <motion.img
          role="presentation"
          whileHover={{ y: 5 }}
          onClick={handleClick}
          src={arrowIcon}
          alt="Strzałka w dół"
        />
      </div>
    </div>
  );
};

export default Header;
