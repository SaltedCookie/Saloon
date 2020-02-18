import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import ServiceType from './components/ServiceType';
import Order from './components/Order';

import Login from './components/Login';
import OrderInfoClient from './components/OrderInfoClient';
import Confirmation from './components/Confirmation';
import Registration from './components/Registration';
import PasswordRecovery from './components/PasswordRecovery';
import Instructions from './components/Instructions';
import PrivateOffice from './components/PrivateOffice';

export const routes = (
  <Switch>
    <Route exact path='/' component={Layout} />
    <Route path='/online-registration/:select' component={ServiceType} />
    <Route path='/order' component={Order} />
    <Route path='/login' component={Login} />
    <Route path='/registration' component={Registration} />
    <Route path='/instructions' component={Instructions} />
    <Route path='/passwordRecovery' component={PasswordRecovery} />
    <Route path='/privateOffice' component={PrivateOffice} />
    <Route path='/orderInfoClient' component={OrderInfoClient} />
    <Route path='/confirmation' component={Confirmation} />
  </Switch>
);
