import React from 'react';
import styles from '../commonModules/registrationAndLogin.module.scss';

export class PasswordRecovery extends React.Component {
  state = {
    email: '',
    phone: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, phone } = this.state;
    if (email && phone) {
      return this.props.history.push('/instructions');
    } 
    return;
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
        <h2>Восстановление аккаунта</h2>
        <p>Пожалуйста заполните данные для восстановления своей учетной записи.</p>
        <form onSubmit={this.handleSubmit}>
          <label>E-mail(*)</label>
          <input type='email' onChange={this.handleChange} name='email' required />
          <label>Номер Телефона(*)</label>
          <input type='text' onChange={this.handleChange} name='phone' required />
          <label>* Обязательные поля.</label>
          <button type="submit">Продолжить</button>
        </form>
        </div>
      </div>
    );
  }
}
