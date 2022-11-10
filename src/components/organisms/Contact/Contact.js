import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import * as styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Heading>Skontaktuj się z nami</Heading>

      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Twoje imię
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Imię"
            id="name"
            name="Imie"
            autoComplete="off"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Adres E-mail
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Adres E-Mail"
            id="email"
            name="E-Mail"
            autoComplete="off"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Wiadomość
          </label>
          <textarea
            type="text"
            rows={9}
            className={styles.input}
            placeholder="Twoja wiadomość"
            id="message"
            name="Wiadomość"
            autoComplete="off"
          />
        </div>
        <div className={styles.buttons}>
          <Button>Wyślij wiadomość</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
