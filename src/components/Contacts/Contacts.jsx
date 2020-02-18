import React from 'react';
import styles from './contacts.module.scss';
import bubbles from '../../videos/bubbles.mp4';

const contactData = [{
  details: 'Приходите',
  style: styles.come,
}, {
  text: 'ул. Рубинштейна 48, Санкт-Петербург, 191002, Россия',
  details: 'info@secretofkoko.ru | +7-931-456-54-46',
  style: styles.address,
}, {
  text: 'ЧАСЫ РАБОТЫ',
  details: 'ПН-ПТ: 9:00-22:00 | СБ: 10:00-21:00 | ВС: 10:00-20:00',
  style: styles.workTime,
}];

const inputs = [{
  text: 'Имя*',
  style: styles.info,
}, {
  text: 'Email*',
  style: styles.info,
}, {
  text: 'Телефон*',
  style: styles.info,
}, {
  text: 'Сообщение*',
  style: styles.message,
}];

export class Contacts extends React.Component {
  state = {
    firstName: '',
    email: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { firstName, email } = this.state;
    if (firstName && email) {
      return this.props.history.push('/');
    } 
    return;
  };

  render() {
    return(
      <div className={styles.container} id='contacts'>
        <video className={styles.bubbles} width='100%' loop="loop" autoplay="autoplay" muted="muted">
          <source src={bubbles} type='video/mp4; codecs="avc1.42E030, mp4a.40.2"' />
        </video>

        <div className={styles.contactsInfo}>
          {
            contactData.map((item, index) => {
              const { text, details, style } = item;
              return (
                <div key={index}>
                  { text ? <p className={style}>{text}</p> : <p className={style}>&#8212;</p> }
                  <p className={style}>{details}</p>
                </div>
              );
            })
          }

          <form onSubmit={this.handleSubmit}>
            {
              inputs.map((input, index) => {
                const { style, text } = input;
                return (
                  <input key={index} type="text" placeholder={text} className={style} onChange={this.handleChange} required />
                );
              })
            }
            <button type='submit'>Отправить</button>
          </form> 
        </div>
      </div>
    );
  }
}
