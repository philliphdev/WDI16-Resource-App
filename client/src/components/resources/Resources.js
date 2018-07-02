import React, { Component } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import styled from 'styled-components';

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1em;
`
const CardDiv = styled.div`
width: 20em;
padding: 10px 0;
p {

}
`
class Resources extends Component {
    state = {
        users: [],
        resources: []
    }

    componentWillMount() {
        this.getAllUsers()
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

    render() {
        const listOfResources = this.state.users.map((user) => {
            const userResources = user.resources.map((resource) => {
                return (
                    <Card className="local-resource-card" key={resource._id}>
                        <CardDiv>
                            <img className="local-user-img" src={user.image} alt="user" />
                            <h3>Posted By: {user.name}</h3>
                            <h5>Category: {resource.category}</h5>
                            <h5>Title: {resource.title}</h5>
                            <p>Description: {resource.description}</p>
                            <img className="local-resource-img" src={resource.image} alt="Resource" />
                            <div>
                                <a href={resource.url} target="_blank">Access Resource Site</a>
                            </div>
                        </CardDiv>
                    </Card>
                )
            })
            return userResources

        })

        return (
            <DivContainer>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <h1>Resources</h1>
                    <Grid className="local-space-evenly-div" container spacing={24} style={{ padding: 24 }}>
                        {listOfResources}
                    </Grid>
                </Grid>
            </DivContainer>
        );
    }
}

export default Resources;