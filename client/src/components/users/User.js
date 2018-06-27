import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

class User extends Component {
    state = {
        user: {}
    }
    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params
            const res = await axios.get(`/api/users/${userId}`)
            this.setState({ user: res.data.user })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const editUser = { ...this.state.user }
        editUser[fieldValue] = event.target.value
        console.log(fieldValue)
        this.setState({ user: editUser })
    }

    updateUser = async () => {
        const { userId } = this.props.match.params
        const res = await axios.patch(`/api/users/${userId}`, {
            user: this.state.user
        })
        this.setState({ user: res.data.user })
    }

    render() {
        const userToEdit = (
            <div>
                <div>
                    <p>Name: </p>
                    <input
                        type="text"
                        name="name"
                        value={this.state.user.name}
                        onChange={(event) => this.handleChange(event, this.state.user._id)}
                        onBlur={() => this.updateUser(this.state.user._id)}
                    />
                </div>
                <div>
                    <p>Email: </p>
                    <input
                        type="text"
                        name="email"
                        value={this.state.user.email}
                        onChange={(event) => this.handleChange(event, this.state.user._id)}
                        onBlur={() => this.updateUser(this.state.user._id)}
                    />
                </div>
                <div>
                    <p>Password: </p>
                    <input
                        type="text"
                        name="password"
                        value={this.state.user.password}
                        onChange={(event) => this.handleChange(event, this.state.user._id)}
                        onBlur={() => this.updateUser(this.state.user._id)}
                    />
                </div>
                <div>
                    <p>Photo URL: </p>
                    <input
                        type="text"
                        name="image"
                        value={this.state.user.image}
                        onChange={(event) => this.handleChange(event, this.state.user._id)}
                        onBlur={() => this.updateUser(this.state.user._id)}
                    />
                </div>
            </div>
        )
        console.log(this.state)
        return (
            <Grid container spacing={24} style={{ padding: 24 }}>
                {userToEdit}
            </Grid>
        );
    }
}

export default User;
