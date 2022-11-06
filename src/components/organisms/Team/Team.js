import React from 'react';
import * as styles from './Team.module.scss';

const Team = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Nasz <span className={styles.mark}>zespół</span>
      </h2>
      <p className={styles.paragraph}>
        Nasz zespół od Września 2017 roku pracuje nad najnowszymi numerami
        gazetki. Nasi Redaktorzy starają się robić: profesjonalne researche,
        ładnie wydrukowane numery oraz starają się wprowadzać nowości dla
        naszych czytelników.
      </p>
    </div>
  );
};

export default Team;
