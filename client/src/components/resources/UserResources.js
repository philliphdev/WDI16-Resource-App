import React, { Component } from 'react';
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

class Resources extends Component {
    state = {
        user: {},
        resources: []
    }

    componentWillMount() {
        this.getUserInfo()
    }

    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params
            const res = await axios.get(`/api/users/${userId}`)
            this.setState({ resources: res.data.user.resources })
        } catch (err) {
            console.log(err)
        }
    }

    // getUser = async () => {
    //     try {
    //         const res = await axios.get('/api/users')
    //         this.setState({ user: res.data })
    //         console.log("Get all users Data ", res.data)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {

        const userResources = this.state.resources.map((resource) => {
            console.log('line 38 ', resource)
            return (
                <Card>
                    <Link
                        key={resource._id}
                        to={`/resources/${resource._id}`}>
                        {/* <h3>Name: {user.name}</h3> */}
                        {/* <img src={user.image} /> */}
                    </Link>
                    <h5>Category: {resource.category}</h5>
                    <h5>Title: {resource.title}</h5>
                    <p>{resource.description}</p>
                    <img src={resource.image} />
                </Card>
            )
        })
        // console.log('line 55 ', listOfResources)
        return (
            <DivContainer>
                <Link to="/">User Resources</Link>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <div>
                        <h1>Resources</h1>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            <div></div>
                            {userResources}
                        </Grid>
                    </div>
                </Grid>
            </DivContainer>
        );
    }
}

export default Resources;