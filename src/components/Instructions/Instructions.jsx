import React from 'react';
import styles from '../commonModules/registrationAndLogin.module.scss';
import { Link } from 'react-router-dom';


export const Instructions = () => (
  <div>
    <div className={styles.containerInstructions}>
      <h2>Личный кабинет</h2>
      <p>Пожалуйста следуйте инструкциям отправленным на указанную Вами почту.</p>
      <Link to='/'>Вернуться на главную страницу</Link>
    </div>
  </div>
);
