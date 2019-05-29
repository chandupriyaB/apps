import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import HomePage from "./HomePage";
import history from './History';
import UserDetails from './UserDetails';

class App extends Component {
  render() {
    return (
        <Router history={history}>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/userDetails' component={UserDetails}/>
        </Router>
    );
  }
}

export default App;
