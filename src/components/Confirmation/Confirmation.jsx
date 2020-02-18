import React from 'react';
import styles from './confirmation.module.scss';
import { Link } from 'react-router-dom';

const text = 'Вы успешно записались на прием! В ближайшее время с вами свяжутся для подтверждения заказа.';

export const Confirmation = () => (
  <div className={styles.text}>
    {text}
    <p>
      <Link to='/'>Вернуться на главную страницу</Link>
    </p>
  </div>
);
