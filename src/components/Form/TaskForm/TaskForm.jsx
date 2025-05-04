import React from 'react'

function TaskForm(props) {
    return (
        <div>
            <h3>{props.titleVerb} your task:</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        id='title'
                        name='title'
                        required
                        value={props.title}
                        onChange={event => props.setTitle(event.target.value)}
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
                <div>
                    <label htmlFor='start_date'>Start Date</label>
                    <input
                        type='date'
                        id='start_date'
                        name='start_date'
                        required
                        value={props.start_date}
                        onChange={event => props.setStart_Date(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='end_date'>End Date</label>
                    <input
                        type='date'
                        id='end_date'
                        name='end_date'
                        value={props.end_date || ''}
                        onChange={event => props.setEnd_Date(event.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default TaskForm
