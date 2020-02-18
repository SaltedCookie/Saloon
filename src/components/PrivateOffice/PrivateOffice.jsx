import React from 'react';
import styles from '../commonModules/registrationAndLogin.module.scss';

import birthday from '../../images/birthday.png';
import beauty from '../../images/beauty.png';
import friend from '../../images/friend.png';
import free from '../../images/free.png';

export const PrivateOffice = () => (
  <div>
    <div className={styles.container}>
      <h2>Добро пожаловать в личный кабинет.</h2>
      <p>Только для наших зарегестрированных посетителей у нас действуют специальные предложения!</p>
      <div className={styles.salesContainer}>

        <div className={styles.imgContainer}>
          <img src={birthday} alt={birthday} className={styles.image}/>
          <p className={styles.sales}>Скидка в день рождение. День рождение - это всегда праздник! Мы сделаем для вас скидку пропорциональную вашему возрасту!</p>
        </div>

        <div className={styles.imgContainer}>
          <p className={styles.sales}>Назовите промокод 'Красота' и получите скидку в 15%. Быть красивой не только приятно, но и выгодно.</p>
          <img src={beauty} alt={beauty} className={styles.image}/>
        </div>

        <div className={styles.imgContainer}>
          <img src={friend} alt={friend} className={styles.image}/>
          <p className={styles.sales}>Приведите с собой подругу и получите скидку в 10%. В любом месте - веселее вместе!</p>
        </div>

        <div className={styles.imgContainer}>
          <p className={styles.sales}>Каждая 12-ая запись на прием - бесплатна! Мы ценим наших постоянных клиентов и любим делать для них подарки!</p>
          <img src={free} alt={free} className={styles.image}/>
        </div>
        
      </div>
    </div>
  </div>
);
