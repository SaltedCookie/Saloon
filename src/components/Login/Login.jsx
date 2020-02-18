import React from 'react';
import styles from './login.module.scss';
import { Link } from 'react-router-dom';


export class Login extends React.Component {
  state = {
    email: undefined,
    password: undefined,
    showWarning: false,
  };

  setComponentState(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  async login(event) {
    event.preventDefault()
    const { email, password } = this.state;
    const response = await fetch('http://localhost:8000/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    const json = await response.json();

    if (json.successful) {
      localStorage.setItem('authentication', JSON.stringify({ authorized: true, login: email }));
      this.props.history.push('/privateOffice');
    } else {
      this.setState({ showWarning: true });
    }
  };

  render() {
    return (<div>
      <div className={styles.container}>
        <h2>Добро пожаловать в личный кабинет.</h2>
        <p className={styles.authorization}>Пожалуйста авторизируйтесь, чтобы продолжить.</p>
        <form id='formLogin' onSubmit={this.login.bind(this)}>
          {this.state.showWarning && <p className={styles.incorectLogin}>Неправильный логин или пароль</p>}
          <label>
            <input
              onChange={(event) => this.setComponentState(event)}
              type='text'
              name='email'
              required
              placeholder='Логин/email' />
          </label>

          <label>
            <input
              onChange={(event) => this.setComponentState(event)}
              type='password'
              name='password'
              required
              placeholder='Пароль' />
          </label>
          <button type='submit'>Войти</button>
          <Link to='/registration'>Регистрация</Link>
          <Link to='/passwordRecovery'>Забыли пароль?</Link>
        </form>
      </div>
    </div>
    );
  }
}
