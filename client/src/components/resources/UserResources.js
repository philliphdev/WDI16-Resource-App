import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddResource from './AddResource'
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import styled from 'styled-components';

const DivContainer = styled.div`
display: flex;
flex-direction: column;
`
const CardDiv = styled.div`
width: 350px;
`

class Resources extends Component {

    state = {
        user: {},
        userId: '',
        resources: [],
        resource: {
            category: '',
            title: '',
            description: '',
            url: '',
            // image: '',
            public: ''
        },
        isShowing: false,
        clickedDelete: true
    }

    componentWillMount() {
        this.getUserInfo()
    }

    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    toggleDelete = (event) => {
        this.setState({
            clickedDelete: !this.state.clickedDelete
        })
    }

    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params
            const res = await axios.get(`/api/users/${userId}`)
            this.setState({
                resources: res.data.user.resources,
                userId: userId
            })
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

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log('l64 resource', this.state.resource)
        const res = await axios.post(`/api/users/${this.state.userId}/resources`,
            this.state.resource,
            this.setState
        )
        // this.props.history.push(`/users/${this.state.userId}`)
    }

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
            // image: this.state.resource.image,
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

        await axios.post(`/api/users/${userId}/resources/`, payload)
        await this.getUserInfo()
            .then((res) => {
                this.setState({
                    resources: this.state.resources,
                    userId: userId,
                    isShowing: false,
                    resource: clearForm
                })
            })
    }

    deleteResource = async (resource) => {
        const userId = this.props.match.params.userId
        console.log('line 51', userId)
        axios.delete(`/api/users/${userId}/resources/${resource}`)
            .then((res) => {
                this.setState({
                    resources: res.data.user.resources,
                    userId: userId
                })
            })
        console.log('Deleted Resource')
        console.log(this.state.clickedDelete)
    }

    render() {
        const userResources = this.state.resources.map((resource, index) => {
            console.log(index)
            return (
                <Card className="local-card" key={index}>
                    <button
                        type="submit"
                        onClick={() => this.deleteResource(resource._id)}>X
                    </button>
                    <Link
                        to={`/resources/${resource._id}`}>
                        {/* <h3>Name: {user.name}</h3> */}
                        {/* <img src={user.image} /> */}
                    </Link>
                    <h5>Category: {resource.category}</h5>
                    <h5>Title: {resource.title}</h5>
                    <p>{resource.description}</p>
                    <div>
                    <img className="local-img" src={resource.image} alt="Resource" />
                    </div>
                    <CardDiv>
                    <Link to={`${this.props.match.url}/${resource._id}`}>User Resource</Link>
                    </CardDiv>
                </Card>
            )
        })
        const reverseOrder = userResources.reverse()
        return (
            <DivContainer>
                <Grid style={{ padding: 24 }}>
                    <div>
                        <h1>Resources</h1>
                        <button onClick={this.toggleIsShowing}>Add Resource</button>
                            {
                                this.state.isShowing ?
                                    <AddResource
                                        newResource={this.newResource}
                                        handleChange={this.handleChange}
                                        resource={this.state.resource}
                                        handleSubmit={this.handleSubmit}
                                    />
                                    : null
                            }

                        <Grid container spacing={24} style={{ padding: 24 }}>


                            {reverseOrder}
                        </Grid>
                    </div>
                </Grid>
            </DivContainer>
        );
    }
}

export default Resources;