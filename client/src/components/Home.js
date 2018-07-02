import React, { Component } from 'react'
import styled from 'styled-components'
import WdiImage from './resources/images/wdi16bg.jpg'
import { Link } from 'react-router-dom'

const wdi16Image = WdiImage

const HomeContainer = styled.div`
  display: flex
  flex-direction: column
  img {
      z-index: 2;
      width: 60%;
      padding: 3em;
      max-width: 600px;
      margin: 2% auto;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  input {
      padding: 5px;
      margin: 10px;
  }
  Button {
      color: blue;
      min-width: 70px;
  }
`
const InsideDiv = styled.div`
height: 100%
display: flex;
justify-content: space-around;
`

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <img src={wdi16Image} alt="web background imge"/>
                <InsideDiv>
                    <form action="/users">
                        <input type="text" placeholder="User ID" />
                        <input type="text" placeholder="password" />
                        <Link type="submit" to="/users">LOG ON</Link>
                    </form>
                </InsideDiv>
                <InsideDiv>
                    <div><Link to="/resources">BROWSE AS GUEST</Link></div>
                </InsideDiv>
            </HomeContainer>
        );
    }
}

export default Home;