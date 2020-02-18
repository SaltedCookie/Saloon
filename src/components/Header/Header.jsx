import React, { Component } from 'react';
import styles from './header.module.scss';

import facebook from '../../images/headerIcons/facebook.png';
import instagram from '../../images/headerIcons/instagram.png';
import vk from '../../images/headerIcons/vk.png';
import { HashLink as Link } from 'react-router-hash-link';

export class Header extends Component {
  checkIsLogin() {
    return localStorage.getItem('authentication');
  };

  logout() {
    localStorage.removeItem('authentication');
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.saloonName}>Тайна КоКо</div>

        <div className={styles.navBar}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <Link to="/#services" smooth={true} duration={1500} className={styles.navLink}>Услуги</Link>
          <Link to="/#sales" smooth={true} duration={1500} className={styles.navLink}>Акции</Link>
          <Link to="/online-registration/nails" className={styles.navLink} replace>Онлайн-запись</Link>
          <Link to={this.checkIsLogin() ? '/privateOffice' : '/login'}>Личный кабинет</Link>
          <Link to="/#contacts" smooth={true} duration={1500} className={styles.navLink}>Контакты</Link>
        </div>

        <div className={styles.logoContainer}>
          <Link to='/'>
            <img src={facebook} alt={facebook} className={styles.logos} />
            <img src={instagram} alt={instagram} className={styles.logos} />
            <img src={vk} alt={vk} className={styles.logos} />
          </Link>
        </div>
        
        <div className={styles.login}>
          { !this.checkIsLogin() ? <div>
            <Link to='/registration'>Регистрация</Link>
            <Link to='/login'>Войти</Link>
          </div> : <Link to='/' onClick={this.logout}>Выйти</Link>}
        </div>
      </div>
    );
  }
}
