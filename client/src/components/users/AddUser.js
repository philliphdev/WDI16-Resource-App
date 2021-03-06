import React, { Component } from 'react';
import axios from 'axios'

class AddUser extends Component {
    state = {
        newUser: {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const addUser = { ...this.state.newUser }
        addUser[fieldValue] = event.target.value
        this.setState({ newUser: addUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users',
            this.state.newUser
        )
        console.log(res)
        this.props.history.push(`/users/`)
    }

    render() {
        return (
            <div>
                <h2>Add User</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="User Name"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUser;