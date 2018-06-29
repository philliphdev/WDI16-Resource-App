import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <form action="/users">
                    <input type="text" placeholder="User ID" />
                    <input type="text" placeholder="password" />
                    <input type="submit" value="Log in" />
                </form>

            </div>
        );
    }
}

export default Home;