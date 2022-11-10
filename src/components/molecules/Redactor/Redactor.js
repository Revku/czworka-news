import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Redactor.module.scss';

const Redactor = ({
  firstName,
  lastName,
  about,
  roleColor,
  roleName,
  photo,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ border: `${roleColor} 2px solid` }}
    >
      <img
        className={styles.image}
        src={photo}
        alt={`Zdjęcie: ${firstName} ${lastName}`}
      />
      <div>
        <h2 className={styles.title}>
          {firstName} {lastName}
        </h2>
        <p className={styles.role} style={{ backgroundColor: roleColor }}>
          {roleName}
        </p>
      </div>
      <p className={styles.about}>{about}</p>
    </div>
  );
};

Redactor.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  roleColor: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  roleName: PropTypes.string.isRequired,
};

export default Redactor;
