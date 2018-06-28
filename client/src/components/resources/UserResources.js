import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddResource from './AddResource'
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
        resources: [],
        isShowing: false
    }

    componentWillMount() {
        this.getUserInfo()
    }

    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
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
        console.log('Line 46 ', this.props.url)
        const userResources = this.state.resources.map((resource) => {
            console.log('line 38 Resource ', resource)
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
                    <Link to={`${this.props.match.url}/${resource._id}`}>User Resource</Link>
                </Card>
            )
        })
        return (
            <DivContainer>
                <Link to={`/users/${this.props.match.params.userId}/resources`}>New User Resource</Link>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <div>
                        <h1>Resources</h1>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            <div></div>
                            <button onClick={this.toggleIsShowing}>Add Resource</button>
                            {
                                this.state.isShowing ?
                                    <AddResource />
                                    : null
                            }
                            {userResources}
                        </Grid>
                    </div>
                </Grid>
            </DivContainer>
        );
    }
}

export default Resources;