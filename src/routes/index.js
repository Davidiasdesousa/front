import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../pages/main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => (
  <Switch>
    <Route path="/signin" component={SignIn}></Route>
    <Route path="/signup" component={SignUp}></Route>
    <Route path="/dash" exact component={Main} isPrivate></Route>
    <Route path="/" component={() => <h1>404</h1>}></Route>
  </Switch>
);

export default Routes;
