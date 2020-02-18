import React from 'react';
import styles from './footer.module.scss';

import facebook from '../../images/footerIcons/facebook.png';
import instagram from '../../images/footerIcons/instagram.png';
import vk from '../../images/footerIcons/vk.png';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className={styles.container}>
      <div>
        <Link to='/'>
          <img src={facebook} alt={facebook} />
          <img src={instagram} alt={instagram} />
          <img src={vk} alt={vk} />
        </Link>
      </div>
      <p>&#169; 2020 Салон красоты "Тайна КоКо". Сайт создан Болтином Кириллом.</p>
  </div>
);
