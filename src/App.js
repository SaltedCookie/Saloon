import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Footer from './components/Footer';
import { routes } from './routes';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Header />
    {routes}
    <Footer />
  </Router>
);

export default App;
