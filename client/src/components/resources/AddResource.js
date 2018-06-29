import React from 'react'

function AddResourceForm(props) {
    console.log(props)
    return (
            <div>
                <h2>Add Resource</h2>
                <form onSubmit={props.newResource}>
                    <input
                        value={props.resource.category}
                        type="text"
                        name="category"
                        onChange={props.handleChange}
                    />
                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        onChange={props.handleChange}
                    />
                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        onChange={props.handleChange}
                    />
                    <input
                        placeholder="Site URL"
                        type="text"
                        name="url"
                        onChange={props.handleChange}
                    />
                    {/* <input
                        placeholder="Logo URL"
                        type="text"
                        name="image"
                        onChange={props.handleChange}
                    /> */}
                    {/* <input
                        placeholder="Public"
                        type="text"
                        name="public"
                        onChange={props.handleChange}
                    /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

export default AddResourceForm;