import React from 'react';
import styles from './serviceType.module.scss';

import bubbles from '../../videos/bubbles.mp4';
import { data } from './constants';
import { Link } from 'react-router-dom';

export const excludeSpecialSymbol = string => {
  const stringArr = string.split(' ');
  stringArr.splice(stringArr.length - 1, 1);
  return stringArr.join(' ');
};

export const formatPrice = string => {
  const rub = '&#8381;';
  if (string.includes(rub)) {
    return (
      <>
        {excludeSpecialSymbol(string)}
        &#8381;
      </>
    );
  }
  return string;
};

export class ServiceType extends React.Component {
  renderLink = (path, text) => {
    return (
      <Link
        to={{
          pathname: `/online-registration/${path}`,
        }}
        className={styles.headers}
      >
        {text}
      </Link>
    );
  }; 

  render() {
    const { select } = this.props.match.params;
    return (
      <div className={styles.bodyContainer}>
        <video className={styles.bubbles} width='100%' loop="loop" autoPlay="autoplay" muted="muted">
          <source src={bubbles} type='video/mp4; codecs="avc1.42E030, mp4a.40.2"' />
        </video>
        <p>&#8212;</p>
        <h1>Наши услуги</h1>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            {this.renderLink('nails', 'Ногти')}
            {this.renderLink('hairs', 'Волосы')}
            {this.renderLink('face', 'Лицо')}
          </div>
          <div>
            {
              data[select].map((section, index) => {
                const {
                  shardOne,
                  shardTwo,
                  shardOneClass,
                  shardTwoClass,
                  sectionClass,
                  linkText,
                } = section;

                return (
                  <div key={index} className={sectionClass}>
                    <p className={shardOneClass}>{shardOne}</p>
                    <p className={shardTwoClass}>{formatPrice(shardTwo)}</p>
                    <Link
                      to={{
                        pathname: '/order',
                        state: section,
                      }}
                    >
                      {linkText}
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

