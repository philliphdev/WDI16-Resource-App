import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import styled from 'styled-components';

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
`

class Users extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
            console.log("Get all users Data ", res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    deleteUser = async (user) => {
        // const userId = this.props.match.params, userId
        axios.delete(`/api/users/${user}`)
        // .then((res) => {
        //     this.setState({
        //         users: this.state.users
        //     })
        // })
        this.props.history.push(`/users/`)
        console.log('Deleted user')
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
            <div>
                <p className="local-hover" to="/adduser">Create a New User</p>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <DivContainer>
                        <h1>Users</h1>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {listOfUsers}
                        </Grid>
                    </DivContainer>
                </Grid>
            </div>
        );
    }
}

export default Users;


