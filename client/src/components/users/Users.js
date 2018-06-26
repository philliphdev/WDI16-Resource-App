import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import styled from 'styled-components';

const DivContainer = styled.div`
display: flex;
flexDirection: column;
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

    render() {
        const listOfUsers = this.state.users.map((user) => {
            return (
                <Card>
                    <Link 
                        key={user._id}
                        to={`/users/${user._id}`}>
                        <h3>Name: {user.name}</h3>
                        <img src={user.image} />
                    </Link>
                </Card>
            
        )})
        return (
            <DivContainer>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <div>
                        <h1>List of Users</h1>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            <div></div>
                            {listOfUsers}
                        </Grid>
                    </div>
                </Grid>
            </DivContainer>
        );
    }
}

export default Users;
