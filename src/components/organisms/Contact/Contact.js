import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import * as styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Heading>Skontaktuj się z nami</Heading>

      <form
        id="contactform"
        action="https://formsubmit.io/send/1fb9e085-7529-4dae-a074-0180d8b63366"
        method="POST"
        className={styles.form}
      >
        <input
          name="_redirect"
          type="hidden"
          id="name"
          value="http://localhost:8000/thanks"
        />

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
          <Button isSubmit>Wyślij wiadomość</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
