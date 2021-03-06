import React, { Component } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const ResourceForm = styled.form`
input[type=text] {
    width: 100%;
    padding: 5px 2px;
    margin: 5px 0;
    display: inline-block;
    border: 1px solid blue;
    border-radius: 3px;
}
`
const CenterDiv = styled.div`
margin: auto
`
class Resource extends Component {
    state = {
        user: [],
        resource: {
            category: '',
            title: '',
            description: '',
            url: '',
            image: '' 
        }
    }
    componentDidMount() {
        this.getInfo()
    }

    getInfo = async () => {
        try {
            const userId = this.props.match.params.userId
            const resourceId = this.props.match.params.resourceId
            const res = await axios.get(`/api/users/${userId}/resources/${resourceId}`)
            this.setState({ resource: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const editResource = { ...this.state.resource }
        editResource[fieldValue] = event.target.value
        this.setState({ resource: editResource })
    }

    updateResource = async () => {
        const userId = this.props.match.params.userId
        const resourceId = this.props.match.params.resourceId
        const res = await axios.patch(`/api/users/${userId}/resources/${resourceId}`,
            this.state.resource,
            this.props.history.push(`/users/${userId}/resources`)
        )
        console.log(res)
    }

    deleteResource = async (user) => {
        const userId = this.props.match.params.userId
        const resourceId = this.props.match.params.resourceId
        axios.delete(`/api/users/${userId}/resources/${resourceId}`)
        this.props.history.push(`/users/${userId}/resources`)
    }
    catch(err) {
        console.log(err)
    }
    render() {
        const resourceToEdit = (
            <CenterDiv>
                <h3>Edit Resource</h3>
                <Card className="local-resource-card">
                    <button onClick={this.deleteResource}>X</button>
                    <p>Title: {this.state.resource.title}</p>
                    <ResourceForm onSubmit={this.updateResource}>
                        <label>Category: </label>
                        <input
                            type="text"
                            name="category"
                            value={this.state.resource.category}
                            onChange={this.handleChange}
                            />
                        <label>Title: </label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.resource.title}
                            onChange={this.handleChange}
                        />
                        <label>Description: </label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.resource.description}
                            onChange={this.handleChange}
                        />
                        <label>Resource URL: </label>
                        <input
                            type="text"
                            name="url"
                            value={this.state.resource.url}
                            onChange={this.handleChange}
                        />
                        <label>Logo URL: </label>
                        <input
                            type="text"
                            name="image"
                            value={this.state.resource.image}
                            onChange={this.handleChange}
                        />
                        <Button type="submit">Submit</Button>
                    </ResourceForm>
                    <img className="local-img" src={this.state.resource.image} alt="Resource" />
                </Card>
            </CenterDiv>
        )
        return (
            <Grid container spacing={24} style={{ padding: 24 }}>
                {resourceToEdit}
            </Grid>
        )
    }
}

export default Resource