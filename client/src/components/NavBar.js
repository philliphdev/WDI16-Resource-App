import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import * as material from 'styled-icons/material'
import * as octicons from 'styled-icons/octicons'
import {Home} from 'styled-icons/fa-solid/Home'
import {Newspaper} from 'styled-icons/fa-regular/Newspaper'
import {UserFriends} from 'styled-icons/fa-solid/UserFriends'

const HomeIcon = () => <Home 
  size="24" 
  title="Home"
  color="white"
  />

  const ResourcesIcon = () => <Newspaper
  size="24"
  title="Resources"
  color="white"
  />

  const UsersIcon = () => <UserFriends
  size="24"
  title="Users"
  color="white"
  />


const NavBar = () => {
  return (

      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            WDI16 Resource App
                </Typography>
          <Link to="/users"><UsersIcon /></Link>
          <Link to="/"><HomeIcon /></Link>
          <Link to="/resources"><ResourcesIcon /></Link>
        </Toolbar>
      </AppBar>

  )
}


export default NavBar;