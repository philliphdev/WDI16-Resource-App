import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Guests from './components/Guests'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Resources from './components/resources/Resources'
import Resource from './components/resources/Resource'
import UserResources from './components/resources/UserResources'
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
const MainContainer = styled.div`
  width: 800px
  height: 800px
  backgroundRepeat: no-repeat
  backgroundPosition: center center
  backgroundSize: cover

  background-image: url(public/images/wdi16bg.jpg)
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Box>
            <NavBar />
          </Box>
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/adduser" component={AddUser} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:userId" component={User} />
            <Route exact path="/guests" component={Guests} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/users/:userId/resources/:resourceId" component={Resource} />
            <Route exact path="/users/:userId/resources" component={UserResources} />
          </Switch>
        </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
