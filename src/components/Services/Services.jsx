import React from 'react';
import styles from './services.module.scss';

import cream from '../../images/cream.png';
import mascara from '../../images/mascara.png';
import haircuts from '../../images/haircuts.png';
import fingernails from '../../images//fingernails.png';
import {Link} from 'react-router-dom';

export class Services extends React.Component {
  renderImage = (source, image) => {
    return (
      <div className={styles.imagesContainers}>
        <img src={source} alt={image} className={styles.images}/>
      </div>
    );
  };

  register = () => (
    <Link to='/online-registration/nails'>
      <p>Записаться></p>
    </Link>
  );

  renderInfoCard = (style, text) => {
    return (
      <div className={style}>
        <p>&#8212;</p>
        <p>{text}</p>
        {this.register()}
      </div>
    );
  };

  render() {
    const { care, makeUp, hairs, nails, services } = styles;
    return (
      <div className={styles.bodyContainer} id='services'>
        <div className={styles.servicesContainer}>

          <div className={services}>
            {this.renderInfoCard(care, 'Уход')}
            {this.renderImage(cream, 'cream')}
            {this.renderInfoCard(makeUp, 'Макияж')}    
            {this.renderImage(mascara, 'mascara')}
          </div>

          <div className={services}>
            {this.renderImage(haircuts, 'haircuts')}
            {this.renderInfoCard(hairs, 'Волосы')}
            {this.renderImage(fingernails, 'fingernails')}
            {this.renderInfoCard(nails, 'Ногти')}
          </div>

        </div>
      </div>
    );
  }
}
