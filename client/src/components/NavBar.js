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


const NavBar = () => {
  return (

      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            WDI16 Resource App
                </Typography>
          <Link to="/users">Users</Link>
          <br />
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
        </Toolbar>
      </AppBar>

  )
}


export default NavBar;