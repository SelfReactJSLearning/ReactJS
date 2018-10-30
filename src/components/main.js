import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Section from './section';
import SideNav from './sidenav';
import LandingPage from './landingPage.js';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/sidenav" component={SideNav} />
    <Route path="/section" component={Section} />
  </Switch>
)

export default Main;