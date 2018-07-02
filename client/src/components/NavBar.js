import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Home } from 'styled-icons/fa-solid/Home'
import { Newspaper } from 'styled-icons/fa-regular/Newspaper'
import { UserFriends } from 'styled-icons/fa-solid/UserFriends'

const NavIcons = styled.div`
display: grid;
grid-template-columns: 30px 30px 30px;
margin: auto;
`

const HomeIcon = () => <Home
  size="24"
  title="Home"
  color="white"
/>

const LogonIcon = () => <Newspaper
  size="24"
  title="Log On"
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
        <div className="local-div">
          <Typography variant="title" color="inherit">
            WDI16 Resource App
        </Typography>
          <div>
            <NavIcons>
              <div><Link to="/users"><UsersIcon /></Link></div>
              <div><Link to="/"><LogonIcon/></Link></div>
              <div><Link to="/resources"><HomeIcon /></Link></div>
            </NavIcons>
          </div>
        </div>
      </Toolbar>
    </AppBar>

  )
}


export default NavBar;