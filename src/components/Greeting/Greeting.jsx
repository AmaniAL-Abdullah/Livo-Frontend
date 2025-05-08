import React from 'react'

function Greeting() {
    const username = localStorage.getItem('username')

    const now = new Date()
    const hour = now.getHours()

    let greeting = ''
    if (hour < 12) {
        greeting = 'Good morning'
    } else if (hour < 18) {
        greeting = 'Good afternoon'
    } else {
        greeting = 'Good evening'
    }

    const today = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
                {greeting}{username ? `.. ${username} 👋` : ' 👋'}
            </h2>
            <p className="text-gray-600 mt-1">{today}</p>
        </div>
    )
}

export default Greeting