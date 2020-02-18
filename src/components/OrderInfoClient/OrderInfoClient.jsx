import React from 'react';
import styles from './orderInfoClient.module.scss';

import OrderDate from '../OrderDate/OrderDate';
import { Link } from 'react-router-dom';


export class OrderInfoClient extends React.Component {
  render() {
    const dateValue = this.props.date || this.props.location.state.value;
    const timeValue = this.props.time || this.props.location.state.time;
    const { selectedItem } = this.props.history.location.state;
    return (
    <div>
      <div className={styles.bodyContainer}>
        <Link to="/order"><p className={styles.back}>&#60; Назад</p></Link>
        <h2>Укажите ваши данные</h2>
        <p>Данные необходимы для записи на прием</p>
        <form>
          <label>Имя</label>
          <input type='text' name='name' required />
          <label>E-mail</label>
          <input type='text' name='email' />
          <label>Номер Телефона</label>
          <input type='text' name='phone' required />
          <label>Сообщение</label>
          <input type='text' name='message' className={styles.message} />
        </form>

        <div className={styles.componentContainer}>
          <OrderDate
            address={'/confirmation'}
            value={dateValue}
            history={this.props.history}
            time={timeValue}
            selectedItem={selectedItem}
          />
        </div>
      </div>
    </div>
    );
  }
}
