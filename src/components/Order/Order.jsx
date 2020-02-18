import React from 'react';
import styles from './order.module.scss';

import OrderDate from '../OrderDate/OrderDate';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

export class Order extends React.Component {
  state = {
    date: new Date(),
    time: '',
    morningTime: ['10-00', '10-30', '11-00', '11-30'],
    dayTime: ['12-00', '12-30', '13-00', '13-30', '14-00', '14-30', '15-00', '15-30', '16-00', '16-30'],
    eveningTime: ['17-00', '17-30', '18-00', '18-30', '19-00', '19-30', '20-00'],
  };

  onClick = (event) => {
    this.setState({ time: event.target.innerText });
  };

  onChange = date => this.setState({ date });

  render() {
    const { state: selectedItem } = this.props.history.location;
    return (
      <div>
        <div className={styles.bodyContainer}>
          <Link to="/online-registration/nails">
            <p className={styles.back}>&#60; Назад</p>
          </Link>
          <h3>Расписание</h3>
          <div className={styles.calendarContainer}>
            <Calendar
              className={styles.calendar}
              onChange={this.onChange}
              value={this.state.date}
            />
            <OrderDate
              value={this.state.date.toDateString()}
              time={this.state.time}
              address={'/orderInfoClient'}
              history={this.props.history}
              selectedItem={selectedItem}
            />
          </div>
          <p>{this.props.pedicur}</p>
          <div className={styles.time}>

            <div className={styles.morning}>
              <p className={styles.dayTime}>Утро</p>
              {
                this.state.morningTime.map((time, i) => (
                  <button key={i} value={this.state.time} onClick={this.onClick}>
                    {time}
                  </button>
                ))
              }
            </div>

            <div className={styles.day}>
              <p className={styles.dayTime}>День</p>
              {
                this.state.dayTime.map((time, i) => (
                  <button key={i} value={this.state.time} onClick={this.onClick}>
                    {time}
                  </button>
                ))
              }
            </div>

            <div className={styles.evening}>
              <p className={styles.dayTime}>Вечер</p>
              {
                this.state.eveningTime.map((time, i) => (
                  <button key={i} value={this.state.time} onClick={this.onClick}>
                    {time}
                  </button>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    );
  }
}
