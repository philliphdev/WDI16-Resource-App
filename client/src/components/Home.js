import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
 


    render() {
        return (
            <div>
                HomePage
                <Link to="/users">Users</Link>
            </div>
        );
    }
}

export default Home;