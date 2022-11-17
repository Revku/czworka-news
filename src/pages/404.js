import React from 'react';
import * as styles from 'styles/custom.module.scss';
import SEO from 'components/SEO';
import logo from 'images/logo.svg';
import Button from 'components/atoms/Button/Button';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Czwórka News Logo" />
      <h2 className={styles.title}>Nie znaleziono!</h2>
      <p className={styles.paragraph}>
        Strona, której szukasz nie istnieje lub została usunięta. Przepraszamy
        za utrudnienia.
      </p>
      <Link to="/" className={styles.button}>
        <Button>Powrót do strony głównej</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
export const Head = () => <SEO title="Wystąpił błąd! - Czwórka News" />;
