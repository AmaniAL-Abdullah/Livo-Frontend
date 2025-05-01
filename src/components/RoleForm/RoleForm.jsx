import React from 'react'

function RoleForm(props) {
    return (
        <div>
            <h3>Add your Role</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        name='name'
                        required
                        value={props.name}
                        onChange={event => props.setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input 
                        id='description'
                        name='description'
                        required
                        value={props.description}
                        onChange={event => props.setDescription(event.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RoleForm
