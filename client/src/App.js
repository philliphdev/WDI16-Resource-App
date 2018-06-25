import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Guests from './components/Guests'
import Home from './components/Home'
import Resources from './components/Resources'
import Users from './components/Users'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route exact path="/guests" component={Guests} />
          <Route path="/resources" component={Resources} />
        </Switch>
      </Router>
    );
  }
}

export default App;
