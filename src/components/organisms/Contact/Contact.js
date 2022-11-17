import React from 'react';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import FormField from 'components/molecules/FormField/FormField';
import * as styles from './Contact.module.scss';

const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  const validateForm = () => {
    setErrors({});
    const newErrors = {};
    let errorsCount = 0;

    if (!email) {
      newErrors.email = 'Podaj adres e-mail!';
      errorsCount += 1;
    }

    if (!name) {
      newErrors.name = 'Podaj swoje imię!';
      errorsCount += 1;
    }

    if (!message) {
      newErrors.message = 'Podaj treść wiadomości!';
      errorsCount += 1;
    }

    setErrors(newErrors);

    if (errorsCount === 0) {
      return true;
    }

    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm() === false) {
      return 0;
    }

    const formData = {
      Mail: email,
      Imie: name,
      Wiadomosc: message,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Kontakt', ...formData }),
    })
      .then(() => {
        location.href = '/thanks';
      })
      .catch(() => {
        location.href = '/form-error';
      });
  };

  return (
    <div className={styles.wrapper}>
      <Heading>Skontaktuj się z nami</Heading>

      <form
        name="Kontakt"
        method="POST"
        action="/"
        className={styles.form}
        onSubmit={(event) => handleSubmit(event)}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Kontakt" />

        <FormField
          label="Twoje Imię"
          name="Imie"
          onChange={setName}
          value={name}
          placeholder="Imię"
          error={errors.name}
        />

        <FormField
          label="Adres E-Mail"
          name="Mail"
          onChange={setEmail}
          value={email}
          placeholder="E-Mail"
          error={errors.email}
        />

        <FormField
          label="Wiadomość"
          name="Wiadomosc"
          onChange={setMessage}
          value={message}
          placeholder="Twoja wiadomość"
          isTextArea
          error={errors.message}
        />

        <div className={styles.buttons}>
          <Button isSubmit>Wyślij wiadomość</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
