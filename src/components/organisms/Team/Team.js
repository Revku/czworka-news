import Redactor from 'components/molecules/Redactor/Redactor';
import getRedactorsData from 'hooks/get-redactors-data';
import React from 'react';
import * as styles from './Team.module.scss';

const Team = () => {
  const [data] = React.useState(getRedactorsData());

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

      <div className={styles.content}>
        {data.map((item) => {
          return (
            <Redactor
              key={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              roleColor={item.roleColor.hex}
              roleName={item.role}
              about={item.about}
              photo={item.photo.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
