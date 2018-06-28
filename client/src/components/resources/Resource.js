import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

class Resource extends Component {
    state = {
        user: [],
        resource: {}
    }
    componentDidMount() {
        const userId = this.props.match.params.userId
        const resourceId = this.props.match.params.resourceId
        this.getInfo()
    }

    getInfo = async () => {
        try {
            const userId = this.props.match.params.userId
            const resourceId = this.props.match.params.resourceId
            const res = await axios.get(`/api/users/${userId}/resources/${resourceId}`)
            this.setState({resource: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const editResource = { ...this.state.resource }
        editResource[fieldValue] = event.target.value
        console.log(fieldValue)
        this.setState({user: editResource})
    }

    updateResource = async () => {
        console.log('line 36', this.props.match.params)
        const { userId } = this.props.match.params
        const res = await axios.patch(`/api/users/${userId}`, 
            this.state.user
        )
        console.log('line 36', this.props.match.params)
        this.setState({user: res.data.user})
    }

    deleteResource = async (user) => {
        const userId = this.props.match.params.userId
        const resourceId = this.props.match.params.resourceId
        console.log('line 51', userId, resourceId)
        axios.delete(`/api/users/${userId}/resources/${resourceId}`)
        console.log('Deleted Resource')
    }
    catch(err) {
        console.log(err)
    }
    render() {
        const resourceToEdit = (
            <div>
                <div>
                    <h3>Resource Page</h3>
                    <p>Name: {this.state.resource.title}</p>
                    <button onClick={this.deleteResource}>X</button>
                    <form onSubmit={this.updateResource}>
                        <input
                            
                            type="text"
                            name="category"
                            placeholder={this.state.resource.category}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="title"
                            type="text"
                            name="title"
                            value={this.state.resource.title}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Description"
                            type="text"
                            name="description"
                            value={this.state.resource.description}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Logo URL"
                            type="text"
                            name="image"
                            value={this.state.resource.image}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
        return (
            <Grid container spacing={24} style={{padding: 24}}>
                {resourceToEdit}
            </Grid>
        )
    }
}

export default Resource

