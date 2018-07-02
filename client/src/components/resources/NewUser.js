import React from 'react'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const UserForm = styled.form`
input[type=text],[type=email] {
    width: 100%;
    padding: 10px 20px;
    margin: 5px 0;
    display: inline-block;
    border: 1px solid blue;
    border-radius: 3px;
}
`
function AddUserForm(props) {
    return (
        <div>
            <h2>Add User</h2>
            <UserForm className="local-card" onSubmit={props.newUser}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={props.handleChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={props.handleChange}
                />
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    onChange={props.handleChange}
                />
                <Button type="submit">Submit</Button>
            </UserForm>
        </div>
    );
}

export default AddUserForm;