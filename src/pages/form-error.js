import React from 'react';
import * as styles from 'styles/custom.module.scss';
import logo from 'images/logo.svg';
import Button from 'components/atoms/Button/Button';
import { Link } from 'gatsby';

const ThanksPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Czwórka News Logo" />
      <h2 className={styles.title}>Wiadomość nie została wysłana :(</h2>
      <p className={styles.paragraph}>
        Wystąpił problem z przesłaniem twojej odpowiedzi. Za utrudnienia
        przepraszamy!
      </p>
      <Link to="/" className={styles.button}>
        <Button>Powrót do strony głównej</Button>
      </Link>
    </div>
  );
};

export default ThanksPage;
