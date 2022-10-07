import React, { useEffect, useState } from 'react';
// import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './Components/Home';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
