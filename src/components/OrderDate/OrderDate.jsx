import React, { Component } from 'react';
import styles from './orderDate.module.scss';
import { formatPrice } from '../ServiceType/ServiceType';

export class OrderDate extends Component {
  jump(address, selectedItem) {
    this.props.history.push({
      pathname: address,
      state: { value: this.props.value, time: this.props.time, selectedItem },
    })
  };

  render() {
    const { selectedItem } = this.props;
    const shardOne = selectedItem ? selectedItem.shardOne : '';
    const shardTwo = selectedItem ? selectedItem.shardTwo : '';
    const text = shardOne;
    return (
      <div className={styles.orderDate}>
        <div className={styles.info}>
          <div className={styles.priceService}>
            {text}
            {' '}
            {formatPrice(shardTwo)}
          </div>
          
          <div className={styles.adress}>
            <p>{this.props.value + ' ' + this.props.time}</p>
            <p>ул.Рубинштейна 48, Санкт-Петербург, Россия</p>
            <p>191002</p>
            <button onClick={() => this.jump(this.props.address, selectedItem)}>Продолжить</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDate;
