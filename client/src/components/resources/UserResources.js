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
        resource: {
            category: '',
            title: '',
            description: '',
            url: '',
            image: '',
            public: ''
        },
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

    handleChange = (event) => {
        const fieldValue = event.target.name
        const AddResource = { ...this.state.resource }
        AddResource[fieldValue] = event.target.value
        console.log(fieldValue)
        this.setState({ resource: AddResource })
    }

    // handleSubmit = async (event) => {
    //     event.preventDefault()
    //     console.log('resource', this.state.resource)
    //     const res = await axios.post('/api/users/:userId/resources/:resourceId',
    //         this.state.resource
    //     )
    //     // this.props.history.push(`/users/`)
    // }

    newResource = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        const resourceId = this.props.match.params.resourceId
        console.log('line 72 UR ', userId)
        const payload = {
            category: this.state.resource.category,
            title: this.state.resource.title,
            description: this.state.resource.description,
            url: this.state.resource.url,
            image: this.state.resource.image,
            public: this.state.resource.public
        }
        const clearForm = {
            category: '',
            title: '',
            description: '',
            url: '',
            image: '',
            public: ''
        }

        await axios.post(`/api/users/${userId}/resources/${resourceId}`, payload)
        // await this.getUserInfo()
        // this.setState({
        //     isShowing: false,
        //     resource: clearForm
        // })
    }


    render() {
        const userResources = this.state.resources.map((resource) => {
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
                                    <AddResource
                                        newResource={this.newResource}
                                        handleChange={this.handleChange}
                                        resource={this.state.resource}
                                    />
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