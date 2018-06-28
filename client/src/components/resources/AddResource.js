import React, {Component} from 'react';
import axios from 'axios'

class AddResource extends Component {
    state = {
        newResource: {
            category: '',
            title: '',
            description: '',
            url: '',
            image: '',
            public: ''
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const AddResource = {...this.state.newResource}
        AddResource[fieldValue] = event.target.value
        console.log(fieldValue)
        this.setState({newResource: AddResource})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log('NewResource', this.state.newResource)
        const res = await axios.post('/api/users/:userId/resources',
            this.state.newResource
        )
        // this.props.history.push(`/users/`)
    }

    render() {
        return (
            <div>
                <h2>Add Resource</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Category"
                        type="text"
                        name="category"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Site URL"
                        type="text"
                        name="url"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Logo URL"
                        type="text"
                        name="image"
                        onChange={this.handleChange}
                    />
                    {/* <input
                        placeholder="Public"
                        type="text"
                        name="public"
                        onChange={this.handleChange}
                    /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddResource;