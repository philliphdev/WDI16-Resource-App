import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import NewUser from '../resources/NewUser'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
`

class Users extends Component {
    state = {
        users: [],
        user: {
            name: '',
            email: '',
            password: ''
        },
        isShowing: false
    }

    componentDidMount() {
        this.getAllUsers()
    }

    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    deleteUser = async (user) => {
        axios.delete(`/api/users/${user}`)
        .then((res) => {
            this.setState({
                users: this.state.users
        })
        console.log('Deleted user')
        this.getAllUsers()
    })
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const addUNew = { ...this.state.user }
        addUNew[fieldValue] = event.target.value
        this.setState({ user: addUNew })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users',
            this.state.user
        )
        console.log(res)
    }

    newUser = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password,
        }
        const clearForm = {
            name: '',
            email: '',
            password: '',
        }
        await axios.post(`/api/users`, payload)
            .then((res) => {
                this.setState({
                    isShowing: false,
                    user: clearForm
                })
                    this.getAllUsers()
            })
    }

    render() {
        const listOfUsers = this.state.users.map((user, index) => {
            return (
                <Card className="local-card" key={index}>
                    <button
                        type="submit"
                        onClick={() => this.deleteUser(user._id)}>X
                    </button>
                    <Link
                        key={user._id}
                        to={`/users/${user._id}`}>
                        <h3 key={user._id}>Name: {user.name}</h3>
                        <img src={user.image} alt="user" />
                    </Link>
                </Card>

            )
        })
        return (
           
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <DivContainer>
                        <h1>Users</h1>
                        <Button onClick={this.toggleIsShowing}>
                            {this.state.isShowing ? "Cancel" : "Add User"}</Button>
                        {
                            this.state.isShowing ?
                                <NewUser
                                    newUser={this.newUser}
                                    handleChange={this.handleChange}
                                    user={this.state.user}
                                />
                                : null
                        }
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {listOfUsers}
                        </Grid>
                    </DivContainer>
                </Grid>
          
        );
    }
}

export default Users;