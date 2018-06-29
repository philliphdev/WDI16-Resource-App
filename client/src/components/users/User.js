import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
// import styled from 'styled-components'

class User extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            image: ''
        }
    }
    componentWillMount() {
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
        console.log('line 36', this.props.match.params)
        const { userId } = this.props.match.params
        const res = await axios.patch(`/api/users/${userId}`, 
            this.state.user,
            this.props.history.push(`/users/`)
        )
        console.log('line 36', this.props.match.params)
        this.setState({ user: res.data.user })
        
    }

    deleteUser = async (user) => {
        const { userId } = this.props.match.params
        axios.delete(`/api/users/${userId}`)
        console.log('Deleted user')
    }
    catch(err) {
        console.log(err)
    }

    render() {
        const userToEdit = (
            <div>
                <div>
                    <p>Name: </p>
                    <button onClick={this.deleteUser}>X</button>
                    <form onSubmit={this.updateUser}>
                        <input
                            
                            type="text"
                            name="name"
                            value={this.state.user.name}
                            onChange={this.handleChange}
                        />
                        <input
                          
                            type="email"
                            name="email"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                        />
                        <input
                           
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
                <Link to={`/users/${this.state.user._id}/resources`}>View User Resources</Link>
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