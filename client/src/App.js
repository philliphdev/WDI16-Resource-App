import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Guests from './components/Guests'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Resources from './components/resources/Resources'
import styled from 'styled-components'
import theme from 'styled-theming'
import AddUser from './components/users/AddUser'
import Users from './components/users/Users'
import User from './components/users/User'
const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Box>
          <NavBar />
        </Box>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/users" component={Users} />
          <Route exact path='/users/:userId' component={User} />
          <Route exact path="/guests" component={Guests} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
