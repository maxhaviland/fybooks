import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Search from './components/SearchBar';
import Home from './pages/Home';
import Details from './pages/Details';

const Routes = () => {
  return (
    <Router>
      <Search/>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/details" component={ Details }/>
      </Switch>
    </Router>
  )
};

export default Routes;
