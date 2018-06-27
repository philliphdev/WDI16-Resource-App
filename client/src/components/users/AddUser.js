import React, { Component } from 'react';
import axios from 'axios'

class AddUser extends Component {
    state= {
    newUser: ''
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            user: this.state.newUser
        })
    }

    render() {
        return (
            <div>
                <h2>Add User</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="User Name"
                        type="text"
                        name="userName"
                        value={this.state.userName}
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={this.state.user.email}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.user.password}
                    />
                    <input
                        placeholder="Photo URL"
                        type="text"
                        name="image"
                        value={this.state.user.image}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUser;