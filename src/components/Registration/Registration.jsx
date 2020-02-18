import React from 'react';
import styles from '../commonModules/registrationAndLogin.module.scss';

export class Registration extends React.Component {
  state = {
    firstName: undefined,
    secondName: undefined,
    email: undefined,
    password: undefined,
    passwordRepeat: undefined,
    wrongPasswordWarning: false,
  };

  setComponentState(event, key) {
    this.setState({ [key]: event.target.value });
  };

  validatePassword(password, passwordRepeat) {
    return password === passwordRepeat;
  };

  async register(event) {
    event.preventDefault();
    const { firstName, secondName, email, password, passwordRepeat } = this.state;

    if (!this.validatePassword(password, passwordRepeat)) {
      this.setState({ wrongPasswordWarning: true });
      return;
    };

    const response = await fetch('http://localhost:8000/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        firstName,
        secondName,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    if (json.created) {
      localStorage.setItem('authentication', JSON.stringify({ authorized: true, login: email }));
      this.props.history.push('/instructions');
    }
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Регистрация</h2>
          <p>Пожалуйста заполните данные для создания своей учетной записи.</p>
          <form id='formRegistration' onSubmit={this.register.bind(this)}>
            <label>Имя(*)</label>
            <input onChange={(event) => this.setComponentState(event, 'firstName')} type='text' name='firstName' required />

            <label>Фамилия(*)</label>
            <input onChange={(event) => this.setComponentState(event, 'secondName')} type='text' name='secondName' required />

            <label>E-mail(*)</label>
            <input onChange={(event) => this.setComponentState(event, 'email')} type='email' name='email' required />

            <label>Пароль(*)</label>
            {this.state.wrongPasswordWarning && <span className={styles.incorectPassword}>Пароли не совпадают</span>}
            <input onChange={(event) => this.setComponentState(event, 'password')} type='password' name='password' required />

            <label>Повторите пароль(*)</label>
            {this.state.wrongPasswordWarning && <span className={styles.incorectPassword}>Пароли не совпадают</span>}
            <input onChange={(event) => this.setComponentState(event, 'passwordRepeat')} type='password' name='password' required />

            <label>* Обязательные поля.</label>
            <button type='submit'>Продолжить</button>
          </form>
        </div>
      </div>
    );
  }
}
