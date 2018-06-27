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
                    <form onSubmit={this.handleSubmit}>
                        <input
                            
                            type="text"
                            name="userName"
                            placeholder={this.state.user.name}
                            
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.user.password}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Photo URL"
                            type="text"
                            name="image"
                            value={this.state.user.image}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
        return (
            <Grid container spacing={24} style={{ padding: 24 }}>
                {userToEdit}
            </Grid>
        )
    }
}

export default User