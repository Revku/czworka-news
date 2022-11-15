import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './FormField.module.scss';

const FormField = ({
  label,
  name,
  onChange,
  value,
  placeholder = label,
  type = 'text',
  isTextArea = false,
  error,
}) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        Twoje imię
      </label>
      {isTextArea ? (
        <textarea
          type={type}
          className={styles.input}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
          rows={10}
        />
      ) : (
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
        />
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

FormField.defaultProps = {
  error: null,
};

export default FormField;
