import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/Signup', '/Login'];
const authenticatedPages = ['/AddIncubator', '/Review Incubator'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/Dashboard');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  // if (isUnauthenticatedPage && isAuthenticated) {
  //   browserHistory.replace('/dashboard');
  // } else if (isAuthenticatedPage && !isAuthenticated) {
  //   browserHistory.replace('/dashboard');
  // }
};
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} onEnter={onEnterPublicPage}/>
    <Route path="/Signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/Login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
