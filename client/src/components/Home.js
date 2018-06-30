import React, { Component } from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'

const HomeContainer = styled.div`
  display: flex
  flex-direction: column
  padding: 1em
  width: 100%
  height: 100%
  background-position: center
  background-size: cover
  background-repeat: no-repeat

`
const InsideDiv = styled.div`
height: 100%
`

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <InsideDiv>
                    <form action="/users">
                        <input type="text" placeholder="User ID" />
                        <input type="text" placeholder="password" />
                        <input type="submit" value="Log in" />
                    </form>
                </InsideDiv>
            </HomeContainer>
        );
    }
}

export default Home;