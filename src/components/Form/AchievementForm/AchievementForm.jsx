import React from 'react'

function AchievementForm(props) {
    return (
        <div>
            <h3>{props.titleVerb} your Achievement:</h3>
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
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        required
                        value={props.date}
                        onChange={event => props.setDate(event.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AchievementForm
