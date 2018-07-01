import React from 'react'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const ResourceForm = styled.form `
input[type=text] {
    width: 100%;
    padding: 10px 20px;
    margin: 5px 0;
    display: inline-block;
    border: 1px solid blue;
    border-radius: 3px;
}
`



function AddResourceForm(props) {
    console.log(props)
    return (
            <div>
                <h2>Add Resource</h2>
                <ResourceForm className="local-card" onSubmit={props.newResource}>                
                <label>Category:</label>
                    <input
                        value={props.resource.category}
                        type="text"
                        name="category"
                        onChange={props.handleChange}
                    />
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        onChange={props.handleChange}
                    />
                    <label>Description:</label>    
                     <input
                        type="text"
                        name="description"
                        onChange={props.handleChange}
                    />
                    <label>Link to Resource:</label>
                        <input
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
                    
                    <Button type="submit">Submit</Button>
                </ResourceForm>
            </div>
        );
    }

export default AddResourceForm;